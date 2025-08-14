import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

type Locale = 'ar' | 'en' | 'es' | 'ja';

const locales: Locale[] = ['ar', 'en', 'es', 'ja'];
const i18nDir = path.join(process.cwd(), 'app', 'i18n');
const outputCsv = path.join(process.cwd(), 'scripts', 'translations.csv');

/**
 * Recursively flattens a nested object into dot-notated keys.
 */
function flattenObject(
  obj: Record<string, unknown>,
  parentKey = '',
  result: Record<string, unknown> = {}
): Record<string, unknown> {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const value = obj[key];
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    // Skip non-string values (like imported images)
    if (typeof value !== 'string') continue;

    // Optionally skip certain file types
    if (value.endsWith('.svg') || value.endsWith('.webp')) continue;

    result[fullKey] = value;
  }

  return result;
}

/**
 * Dynamically imports a translation file and returns its default export.
 */
async function getTranslationKeys(
  filePath: string
): Promise<Record<string, unknown>> {
  try {
    const mod = await import(pathToFileURL(filePath).href);
    if (mod.default && typeof mod.default === 'object') {
      return mod.default as Record<string, unknown>;
    }
  } catch (err) {
    console.warn(`Failed to import ${filePath}: ${err}`);
  }
  return {};
}

/**
 * Main function to export all translations to CSV.
 */
async function exportToCSV() {
  const files = fs
    .readdirSync(path.join(i18nDir, 'en'))
    .filter((f) => f.endsWith('.ts'));
  console.log('Detected locales:', locales);
  console.log('Files to process:', files);

  const csvRows: Record<string, string>[] = [];

  for (const file of files) {
    console.log('Processing file:', file);

    const localeTranslations: Record<Locale, Record<string, unknown>> = {
      ar: {},
      en: {},
      es: {},
      ja: {},
    };

    for (const locale of locales) {
      const filePath = path.join(i18nDir, locale, file);
      const translationObj = await getTranslationKeys(filePath);
      localeTranslations[locale] = flattenObject(translationObj);
      console.log(`  Locale: ${locale}`);
      console.log(
        `    Flattened keys:`,
        Object.keys(localeTranslations[locale])
      );
    }

    // Collect all unique keys across locales
    const allKeys = new Set<string>();
    for (const locale of locales) {
      Object.keys(localeTranslations[locale]).forEach((k) => allKeys.add(k));
    }

    for (const key of Array.from(allKeys)) {
      csvRows.push({
        file,
        key,
        ar: (localeTranslations.ar[key] ?? '') as string,
        en: (localeTranslations.en[key] ?? '') as string,
        es: (localeTranslations.es[key] ?? '') as string,
        ja: (localeTranslations.ja[key] ?? '') as string,
      });
    }
  }

  const csv = Papa.unparse(csvRows, { header: true });
  fs.writeFileSync(outputCsv, csv);
  console.log(`✅ Exported translations to ${outputCsv}`);
}

// Convert file path to file URL for dynamic import
import { pathToFileURL } from 'node:url';

// Run the export
exportToCSV();
