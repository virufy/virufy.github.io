import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

// CSV file
const csvFile = path.resolve('./scripts/translations.csv');

// Locales to generate
const locales = ['ar', 'en', 'es', 'ja'];

// Nested object type
type NestedObject = {
  [key: string]: string | NestedObject | (string | NestedObject)[];
};

// Helper to set a nested value by dot/number path
function setNested(obj: NestedObject, key: string, value: string): void {
  const parts = key.split('.');
  let current: NestedObject | (string | NestedObject)[] = obj;
  let parent: any = null;
  let parentKey: string | number | null = null;

  parts.forEach((part, index) => {
    const isArrayIndex = /^\d+$/.test(part);
    const isLast = index === parts.length - 1;

    if (isLast) {
      if (isArrayIndex) {
        if (!Array.isArray(current)) {
          // Replace the object in parent with an array
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

    // Prepare next level
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

// Convert nested object to TypeScript literal string
function toTsLiteral(
  obj: string | NestedObject | (string | NestedObject)[],
  indent = 2
): string {
  const space = ' '.repeat(indent);

  if (typeof obj === 'string') return JSON.stringify(obj);

  if (Array.isArray(obj)) {
    const items = obj.map((item) => toTsLiteral(item, indent + 2));
    return `[\n${space}${items.join(`,\n${space}`)}\n${' '.repeat(indent - 2)}]`;
  }

  const entries = Object.entries(obj).map(([k, v]) => {
    return `${k}: ${toTsLiteral(v, indent + 2)}`;
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

// Generate files per locale in "test" folder
const outputRoot = path.resolve('./test');

for (const locale of locales) {
  const localeDir = path.join(outputRoot, locale);
  if (!fs.existsSync(localeDir)) fs.mkdirSync(localeDir, { recursive: true });

  for (const topFile in files) {
    const obj: NestedObject = {};

    for (const key in files[topFile]) {
      const value = files[topFile][key][locale];
      if (value !== undefined) {
        setNested(obj, key.replace(`${topFile}.`, ''), value);
      }
    }

    const typeImport = `import { type ${capitalize(topFile)} } from '../types/${topFile}';\n\n`;
    const constDeclaration = `const ${topFile}: ${capitalize(topFile)} = ${toTsLiteral(
      obj
    )};\n\n`;
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
