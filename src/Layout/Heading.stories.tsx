import type { Meta } from '@storybook/react-vite';
import { Container } from '../../lib/Layout/Container';
import { Heading as HeadingEl } from '../../lib/Layout/Heading';
import { Button } from '../../lib/Elements';
import { fn } from 'storybook/test';

const meta: Meta = {
  title: 'Layout/Heading',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    meta: [
      { value: 'Meta Info', key: 'meta' },
      { value: 'More Info', key: 'more' },
    ],
    title: 'Heading Example',
    filters: [
      { value: 'Filter 1', key: 'filter1' },
      { value: 'Filter 2', key: 'filter2' },
    ],
  },
  argTypes: {
    title: { control: 'text' },
    meta: { control: 'object' },
  },
  play: async ({ canvas, userEvent }) => {
    // Example play function to demonstrate interaction
    await userEvent.click(canvas.getByRole('button', { name: 'Action' }));
  },
};
export default meta;

export const Heading = (args: Meta<typeof HeadingEl>['args'] = {}) => {
  // Provide a default action button with Storybook's fn for action logging
  const handleAction = fn();
  return (
    <Container>
      <HeadingEl {...args}>
        <Button size="small" onClick={handleAction}>
          Action
        </Button>
      </HeadingEl>
      <div>Some content below the heading.</div>
    </Container>
  );
};
