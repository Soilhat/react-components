import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../../lib/Layout/Container';
import { Heading } from '../../lib/Layout/Heading';

const meta: Meta = {
  title: 'Layout/Container',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj;

export const ContainerExample: Story = {
  render: () => (
    <Container>
      <Heading title="Container Example" />
      <div>This content is centered and padded.</div>
    </Container>
  ),
};
