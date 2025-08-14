import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const I18N_DIR = path.join(__dirname, '../app/i18n');
const INPUT_CSV = path.join(__dirname, 'translations.csv');

function unflattenObject(data) {
  const result = {};
  for (let flatKey in data) {
    const parts = flatKey.split(/\.|\[(\d+)\]/).filter(Boolean);
    let current = result;
    for (let i = 0; i < parts.length; i++) {
      const isLast = i === parts.length - 1;
      const part = /^\d+$/.test(parts[i]) ? parseInt(parts[i]) : parts[i];
      if (isLast) {
        current[part] = data[flatKey];
      } else {
        if (current[part] === undefined) {
          current[part] = typeof parts[i + 1] === 'number' ? [] : {};
        }
        current = current[part];
      }
    }
  }
  return result;
}

function importFromCSV() {
  const content = fs.readFileSync(INPUT_CSV, 'utf8');
  const [headerLine, ...lines] = content.split(/\r?\n/).filter(Boolean);

  const header = headerLine.split(',').map((s) => s.replace(/^"|"$/g, ''));
  const locales = header.slice(2);

  const dataByFileAndLocale = {};

  for (const line of lines) {
    const cols = line.split(',').map((s) => s.replace(/^"|"$/g, '').replace(/""/g, '"'));
    const [file, key, ...values] = cols;
    if (!dataByFileAndLocale[file]) dataByFileAndLocale[file] = {};
    locales.forEach((locale, i) => {
      if (!dataByFileAndLocale[file][locale]) dataByFileAndLocale[file][locale] = {};
      if (values[i]) dataByFileAndLocale[file][locale][key] = values[i];
    });
  }

  for (const file in dataByFileAndLocale) {
    for (const locale of locales) {
      const obj = unflattenObject(dataByFileAndLocale[file][locale]);
      const localeDir = path.join(I18N_DIR, locale);
      if (!fs.existsSync(localeDir)) fs.mkdirSync(localeDir);

      const tsContent = `export default ${JSON.stringify(obj, null, 2)};\n`;
      fs.writeFileSync(path.join(localeDir, file), tsContent, 'utf8');
    }
  }

  console.log(`✅ Imported translations for locales: ${locales.join(', ')}`);
}

importFromCSV();