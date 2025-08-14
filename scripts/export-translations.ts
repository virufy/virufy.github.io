import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Papa from 'papaparse';

// __dirname fix for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory with your locale folders (en, ar, es, ja)
const i18nDir = path.resolve(__dirname, '../app/i18n');

// Locales to process
const locales = ['ar', 'en', 'es', 'ja'];

// Output CSV file
const outputFile = path.resolve(__dirname, 'translations.csv');

// Helper: flatten nested objects
function flattenObject(
  obj: Record<string, unknown>,
  parentKey = '',
  result: Record<string, unknown> = {}
): Record<string, unknown> {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const value = obj[key];
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    // Skip images
    if (
      typeof value === 'string' &&
      (value.endsWith('.svg') || value.endsWith('.webp'))
    )
      continue;

    if (typeof value === 'object' && value !== null) {
      flattenObject(value as Record<string, unknown>, fullKey, result);
    } else {
      result[fullKey] = value;
    }
  }
  return result;
}

// Main
async function main() {
  const allKeys = new Set<string>();
  const localeData: Record<string, Record<string, unknown>> = {};

  // Load each locale folder
  for (const locale of locales) {
    const localePath = path.join(i18nDir, locale);
    const files = fs.readdirSync(localePath).filter((f) => f !== 'types.ts');

    const flattened: Record<string, unknown> = {};

    for (const file of files) {
      const filePath = path.join(localePath, file);
      try {
        const mod = await import(`file://${filePath}`);
        const data = mod.default || mod;
        const flat = flattenObject(data);
        for (const key in flat) {
          flattened[`${file.replace(/\.ts$/, '')}.${key}`] = flat[key];
          allKeys.add(`${file.replace(/\.ts$/, '')}.${key}`);
        }
      } catch (err) {
        //console.error(`Failed to import ${filePath}:`, err);
      }
    }

    localeData[locale] = flattened;
  }

  // Build CSV rows
  const rows: Record<string, string>[] = [];
  for (const key of allKeys) {
    const row: Record<string, string> = { key };
    for (const locale of locales) {
      row[locale] = (localeData[locale][key] as string) || '';
    }
    rows.push(row);
  }

  // Convert to CSV and write
  const csv = Papa.unparse(rows, { columns: ['key', ...locales] });
  fs.writeFileSync(outputFile, csv);
  console.log(`✅ Exported translations to ${outputFile}`);
}

main().catch(console.error);
