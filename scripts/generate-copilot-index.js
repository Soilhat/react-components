import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { parse } from 'react-docgen-typescript';

const componentFiles = globSync('lib/**/*.{ts,tsx}', {
  ignore: ['**/*.test.*', '**/*.stories.*'],
});

const docgenParser = parse(componentFiles, {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
});

let output = `/**\n * Auto-generated interface reference index for @soilhat/react-components.\n */\n\nimport type * as React from 'react';\n\n`;

const sanitize = (str) => str.replace(/[^a-zA-Z0-9_$]/g, '');

docgenParser.forEach((doc) => {
  if (!doc.displayName) return;

  const rawName = doc.displayName;

  // Handle namespaced components (e.g. Card.Header -> namespace Card { export const Header: ... })
  if (rawName.includes('.')) {
    const parts = rawName.split('.');
    const parent = sanitize(parts[0]);
    const child = sanitize(parts[1]);
    const interfaceName = `${parent}${child}Props`;

    output += `export interface ${interfaceName} {\n`;
    Object.values(doc.props || {}).forEach((prop) => {
      const optional = prop.required ? '' : '?';
      const propName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(prop.name) ? prop.name : `'${prop.name}'`;
      const typeName = prop.type?.name?.trim() || 'unknown';
      output += `  ${propName}${optional}: ${typeName};\n`;
    });
    output += `}\n`;
    output += `export namespace ${parent} {\n`;
    output += `  export const ${child}: React.FC<${interfaceName}>;\n`;
    output += `}\n\n`;
  } else {
    const safeName = sanitize(rawName);
    const interfaceName = `${safeName}Props`;

    output += `export interface ${interfaceName} {\n`;
    Object.values(doc.props || {}).forEach((prop) => {
      const optional = prop.required ? '' : '?';
      const propName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(prop.name) ? prop.name : `'${prop.name}'`;
      const typeName = prop.type?.name?.trim() || 'unknown';
      output += `  ${propName}${optional}: ${typeName};\n`;
    });
    output += `}\n`;
    output += `export const ${safeName}: React.FC<${interfaceName}>;\n\n`;
  }
});

const outputPath = path.join(process.cwd(), 'dist', 'copilot-reference.d.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output);

console.log(`✅ Cleanly generated Copilot interface index at ${outputPath}`);
