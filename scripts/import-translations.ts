import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const csvFilePath = path.resolve('./scripts/translations.csv');
const csvContent = fs.readFileSync(csvFilePath, 'utf8');

interface TranslationRow {
  key: string;
  ar: string;
  en: string;
  es: string;
  ja: string;
}

const records: TranslationRow[] = parse(csvContent, {
  columns: false,
  skip_empty_lines: true,
}) as unknown as TranslationRow[];

const translations: Record<
  string,
  { ar: string; en: string; es: string; ja: string }
> = {};

records.forEach((row) => {
  const [key, ar, en, es, ja] = Object.values(row);
  translations[key] = { ar, en, es, ja };
});

// Write to a test file
fs.writeFileSync(
  path.resolve('test-translations.json'),
  JSON.stringify(translations, null, 2),
  'utf8'
);

console.log('Test translations written successfully!');
