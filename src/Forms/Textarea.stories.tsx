import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../../lib/Forms/Textarea';

const meta: Meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Type your message...',
    rows: 4,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Bio',
    defaultValue: 'This is a pre-filled textarea.',
    rows: 6,
  },
};

export const MarkdownPreview: Story = {
  args: {
    label: 'Markdown text',
    defaultValue: `# Udaeque pallenti

Lorem markdownum Icarus ulla sed isque dant fragmina casa, sacerdotis iaculo.
Quae fera et, *pius nimium*, cruentis, at. Praesens parte sicco candida pleno.
Est sociis dis aniles maestisque nemorum victa varios, an ingentes summis certa
vetustas nato. Fuit pater haec victricia sociae et \`adfPiracy\` excipit vidit
\`arrayBiometricsCpu\` ullis fratremque uterque aequora Iuppiter aliquos sui.`,
    markdown: true,
    rows: 8,
  },
};
