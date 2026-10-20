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

docgenParser.forEach((doc) => {
  if (!doc.displayName) return;

  output += `/** ${doc.description || doc.displayName} */\n`;
  output += `export interface ${doc.displayName}Props {\n`;

  Object.values(doc.props || {}).forEach((prop) => {
    // Sanitize prop name (e.g. handle aria-* or data-* props safely)
    const safePropName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(prop.name) ? prop.name : `'${prop.name}'`;

    const optional = prop.required ? '' : '?';

    // Fallback to 'unknown' if type name is empty or invalid
    let rawTypeName = prop.type?.name?.trim();
    if (!rawTypeName || rawTypeName === 'enum') {
      rawTypeName = 'unknown';
    }

    output += `  ${safePropName}${optional}: ${rawTypeName};\n`;
  });

  output += `}\n`;
  output += `export const ${doc.displayName}: React.FC<${doc.displayName}Props>;\n\n`;
});

const outputPath = path.join(process.cwd(), 'dist', 'copilot-reference.d.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output);

console.log(`✅ Cleanly generated Copilot interface index at ${outputPath}`);
