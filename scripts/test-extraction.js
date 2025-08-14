import fs from 'fs';
import path from 'path';
import ts from 'typescript';

// --- Helper: Extract default export object ---
function extractDefaultExportObject(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const sourceFile = ts.createSourceFile(filePath, fileContents, ts.ScriptTarget.Latest, true);

  let exportedObject = null;

  try {
    ts.forEachChild(sourceFile, node => {
      if (ts.isExportAssignment(node)) {
        const expr = node.expression;

        if (ts.isObjectLiteralExpression(expr)) {
          exportedObject = convertObjectLiteral(expr);
        } else if (ts.isIdentifier(expr)) {
          const varName = expr.text;
          ts.forEachChild(sourceFile, declNode => {
            if (ts.isVariableStatement(declNode)) {
              declNode.declarationList.declarations.forEach(decl => {
                if (decl.name.getText() === varName && decl.initializer) {
                  if (ts.isObjectLiteralExpression(decl.initializer)) {
                    exportedObject = convertObjectLiteral(decl.initializer);
                  } else {
                    console.log(`    ⚠️ Skipping non-object initializer in ${filePath}`);
                  }
                }
              });
            }
          });
        } else {
          console.log(`    ⚠️ Skipping non-object export in ${filePath}`);
        }
      }
    });
  } catch (err) {
    console.log(`    ⚠️ Error parsing ${filePath}: ${err.message}`);
  }

  return exportedObject;
}

// --- Helper: Convert TS ObjectLiteralExpression to JS object ---
function convertObjectLiteral(objLiteral) {
  const obj = {};
  objLiteral.properties.forEach(prop => {
    const key = prop.name?.getText().replace(/['"]/g, '');
    if (!key) return;

    if (ts.isObjectLiteralExpression(prop.initializer)) {
      obj[key] = convertObjectLiteral(prop.initializer);
    } else if (ts.isArrayLiteralExpression(prop.initializer)) {
      obj[key] = prop.initializer.elements.map(el => {
        if (ts.isObjectLiteralExpression(el)) return convertObjectLiteral(el);
        if (ts.isStringLiteral(el)) return el.text;
        if (ts.isNumericLiteral(el)) return Number(el.text);
        return el.getText();
      });
    } else if (ts.isStringLiteral(prop.initializer)) {
      obj[key] = prop.initializer.text;
    } else if (ts.isNumericLiteral(prop.initializer)) {
      obj[key] = Number(prop.initializer.text);
    } else {
      obj[key] = prop.initializer.getText();
    }
  });
  return obj;
}

// --- Helper: Flatten object for CSV ---
function flattenObject(obj, prefix = '', res = {}) {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, res);
    } else {
      res[newKey] = value;
    }
  }
  return res;
}

// --- Test extraction for all locales ---
const localesDir = path.resolve('./app/i18n');
const locales = fs.readdirSync(localesDir).filter(f => fs.statSync(path.join(localesDir, f)).isDirectory());

console.log('Detected locales:', locales);

locales.forEach(locale => {
  const localeDir = path.join(localesDir, locale);
  const files = fs.readdirSync(localeDir).filter(f => f.endsWith('.ts'));

  console.log(`\nLocale: ${locale}`);
  files.forEach(file => {
    const filePath = path.join(localeDir, file);
    console.log(`  Processing file: ${file}`);

    const obj = extractDefaultExportObject(filePath);
    if (!obj) {
      console.log('    ⚠️  No default export found or object is empty.');
      return;
    }

    console.log('    Extracted keys:', Object.keys(obj));

    const flat = flattenObject(obj);
    console.log('    Flattened keys:', Object.keys(flat).slice(0, 10), '...'); // show only first 10
  });
});
