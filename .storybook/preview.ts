import type { Preview } from '@storybook/react-vite';

import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/style.css';
import '../lib/style.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#0D1117' },
        light: { name: 'Light', value: 'white' },
      },
    },

    a11y: {
      test: 'todo',
    },

    options: {
      storySort: {
        method: 'alphabetical',
        order: ['*', 'Pages'],
      },
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light bg-background text-foreground',
      dark: 'dark bg-background text-foreground',
    },
    defaultTheme: 'light',
  }),
];

export default preview;
