import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { parse } from 'react-docgen-typescript';

// Path to component source files
const componentFiles = globSync('lib/**/*.{ts,tsx}', {
  ignore: ['**/*.test.*', '**/*.stories.*'],
});

const docgenParser = parse(componentFiles, {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldRemoveUndefinedFromOptional: true,
});

let output = `/**\n * Auto-generated interface reference index for @soilhat/react-components.\n * Used by AI assistants (GitHub Copilot) for strict autocomplete and type lookup.\n */\n\n`;

docgenParser.forEach((doc) => {
  output += `/**\n * ${doc.description || doc.displayName}\n */\n`;
  output += `export interface ${doc.displayName}Props {\n`;

  Object.values(doc.props).forEach((prop) => {
    const optional = prop.required ? '' : '?';
    const description = prop.description ? `  /** ${prop.description} */\n` : '';
    output += `${description}  ${prop.name}${optional}: ${prop.type.name};\n`;
  });

  output += `}\n`;
  output += `export const ${doc.displayName}: React.FC<${doc.displayName}Props>;\n\n`;
});

const outputPath = path.join(process.cwd(), 'dist', 'copilot-reference.d.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, output);

console.log(`✅ Successfully generated Copilot interface index at ${outputPath}`);
