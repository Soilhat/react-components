import type { Preview } from '@storybook/react-vite';

import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/style.css';
import '../lib/style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#030712' },
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
      light: 'light',
      dark: 'dark bg-gray-950',
    },
    defaultTheme: 'light',
  }),
];

export default preview;
