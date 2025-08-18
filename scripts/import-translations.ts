import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

/** * This script imports translations from a CSV file into TypeScript files per locale.
 * It reads a CSV file with translation keys and values for each locale,
 * flattens nested objects, and generates TypeScript files for each locale.
 * * It assumes the CSV has a "key" column and one column for each locale.
 * The output will be TypeScript files in a specified directory, with each file containing
 *
 * run using:
 * node --loader ts-node/esm scripts/export-translations.ts
 *
 * Make sure to have the necessary packages installed:
 * npm install papaparse ts-node @types/node
 *
 * it will put the generated files in the "translationsOutput" folder.
 * Adjust the csvFile and locales array as needed for your project structure.
 */

// CSV file
const csvFile = path.resolve('./scripts/translations.csv');

// Locales to generate
const locales = ['ar', 'en', 'es', 'ja'];

// Nested object type
type NestedObject = {
  [key: string]: string | NestedObject | (string | NestedObject)[];
};

// Helper to set a nested value by dot/number path
function setNested(
  obj: NestedObject | (string | NestedObject)[],
  key: string,
  value: string
): void {
  const parts = key.split('.');
  let current: NestedObject | (string | NestedObject)[] = obj;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let parent: any = null;
  let parentKey: string | number | null = null;

  parts.forEach((part, index) => {
    const isArrayIndex = /^\d+$/.test(part);
    const isLast = index === parts.length - 1;

    if (isLast) {
      if (isArrayIndex) {
        if (!Array.isArray(current)) {
          const arr: (string | NestedObject)[] = [];
          if (parent && parentKey !== null) parent[parentKey] = arr;
          current = arr;
        }
        (current as (string | NestedObject)[])[Number(part)] = value;
      } else {
        (current as NestedObject)[part] = value;
      }
      return;
    }

    if (isArrayIndex) {
      const idx = Number(part);
      if (!Array.isArray(current)) {
        const arr: (string | NestedObject)[] = [];
        if (parent && parentKey !== null) parent[parentKey] = arr;
        current = arr;
      }
      if (!current[idx]) current[idx] = {};
      parent = current;
      parentKey = idx;
      current = current[idx] as NestedObject;
    } else {
      if (Array.isArray(current)) throw new Error(`Expected object at ${part}`);
      if (!(part in current)) current[part] = {};
      parent = current;
      parentKey = part;
      current = current[part] as NestedObject;
    }
  });
}

// Convert nested object/array to TypeScript literal
function toTsLiteral(
  obj: string | NestedObject | (string | NestedObject)[],
  indent = 2
): string {
  const space = ' '.repeat(indent);

  if (typeof obj === 'string') return JSON.stringify(obj);

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    const items = obj.map((item) => toTsLiteral(item, indent + 2));
    return `[\n${space}${items.join(`,\n${space}`)}\n${' '.repeat(indent - 2)}]`;
  }

  const keys = Object.keys(obj).filter((k) => {
    const v = (obj as NestedObject)[k];
    return (
      v !== '' &&
      v !== undefined &&
      !(Array.isArray(v) && v.length === 0) &&
      !(
        typeof v === 'object' &&
        !Array.isArray(v) &&
        Object.keys(v).length === 0
      )
    );
  });

  if (keys.length === 0) return '{}';

  const entries = keys.map((k) => {
    return `${k}: ${toTsLiteral((obj as NestedObject)[k], indent + 2)}`;
  });

  return `{\n${space}${entries.join(`,\n${space}`)}\n${' '.repeat(indent - 2)}}`;
}

// Read CSV
const csvContent = fs.readFileSync(csvFile, 'utf-8');
const parsed = Papa.parse(csvContent, { header: true }).data as Record<
  string,
  string
>[];

// Group keys by top-level file
const files: Record<string, Record<string, Record<string, string>>> = {};

for (const row of parsed) {
  const [topKey] = row.key.split('.');
  if (!files[topKey]) files[topKey] = {};
  files[topKey][row.key] = row;
}

// Generate files per locale
const outputRoot = path.resolve('./translationsOutput');

for (const locale of locales) {
  const localeDir = path.join(outputRoot, locale);
  if (!fs.existsSync(localeDir)) fs.mkdirSync(localeDir, { recursive: true });

  for (const topFile in files) {
    const firstKey = Object.keys(files[topFile])[0]
      .replace(`${topFile}.`, '')
      .split('.')[0];
    const obj: NestedObject | (string | NestedObject)[] = /^\d+$/.test(firstKey)
      ? []
      : {};

    let hasContent = false;

    for (const key in files[topFile]) {
      const value = files[topFile][key][locale];
      if (value !== undefined && value !== '') {
        setNested(obj, key.replace(`${topFile}.`, ''), value);
        hasContent = true;
      }
    }

    // Skip file if no content
    if (!hasContent) continue;

    const typeImport = `import { type ${capitalize(topFile)} } from '../types/${topFile}';\n\n`;
    const constDeclaration = `const ${topFile}: ${capitalize(topFile)} = ${toTsLiteral(obj)};\n\n`;
    const exportStatement = `export default ${topFile};\n`;

    fs.writeFileSync(
      path.join(localeDir, `${topFile}.ts`),
      typeImport + constDeclaration + exportStatement,
      'utf-8'
    );
  }
}

// Capitalize helper
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('✅ Generated per-locale TS files in "test" folder!');
