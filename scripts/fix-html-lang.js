import fs from 'fs';
import path from 'path';

// app/layout.tsx is the only place that renders <html>, but it sits above the
// `[lang]` route segment, so Next.js never gives it params.lang — every static
// page gets exported with the same fallback `lang="en"`, regardless of actual
// page language (WCAG 3.1.1). This walks the exported `out/` folder after
// build and corrects the `lang` attribute on every file based on its real
// locale folder (`/en/`, `/es/`, `/ja/`, `/ar/`).

const locales = ['en', 'ja', 'ar', 'es'];
const outDir = path.resolve(process.cwd(), 'out');

function localeForFile(relativePath) {
  const firstSegment = relativePath.split(path.sep)[0];
  return locales.includes(firstSegment) ? firstSegment : null;
}

function walk(dir, callback) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      callback(fullPath);
    }
  }
}

let fixedCount = 0;

walk(outDir, (filePath) => {
  const relativePath = path.relative(outDir, filePath);
  const locale = localeForFile(relativePath);
  if (!locale) return;

  const html = fs.readFileSync(filePath, 'utf8');
  const updated = html.replace(
    /(<html[^>]*\blang=")[^"]*(")/,
    `$1${locale}$2`,
  );

  if (updated !== html) {
    fs.writeFileSync(filePath, updated, 'utf8');
    fixedCount += 1;
  }
});

console.log(`Fixed <html lang> on ${fixedCount} exported page(s).`);
