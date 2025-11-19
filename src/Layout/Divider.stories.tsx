import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from '../../lib/Layout/Divider';
import { Container } from '../../lib/Layout/Container';
import { Heading } from '../../lib/Layout/Heading';

const meta: Meta = {
  title: 'Layout/Divider',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj;

export const DividerExample: Story = {
  render: () => (
    <Container>
      <Heading title="Divider Example" />
      <div>Above the divider</div>
      <Divider />
      <div>Below the divider</div>
    </Container>
  ),
};
