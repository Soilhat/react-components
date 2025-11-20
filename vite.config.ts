/// <reference types="vitest/config" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import path, { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import tailwindcss from '@tailwindcss/vite';
const dirname = typeof __dirname === 'undefined' ? path.dirname(fileURLToPath(import.meta.url)) : __dirname;

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    tailwindcss(),
    dts({
      exclude: ['**/*.stories.tsx'],
      tsconfigPath: 'tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync(['lib/**/index.tsx', 'lib/main.ts']).map((file) => {
          // This remove `lib/` as well as the file extension from each
          // file, so e.g. lib/nested/foo.js becomes nested/foo
          const entryName = path.relative('lib', file.slice(0, file.length - path.extname(file).length));
          // This expands the relative paths to absolute paths, so e.g.
          // lib/nested/foo becomes /project/lib/nested/foo.js
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        })
      ),
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  test: {
    coverage: {
      reporter: ['lcov', 'html'],
      exclude: ['**/*.stories.tsx', 'tests/**', 'vite.config.ts'],
    },
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
