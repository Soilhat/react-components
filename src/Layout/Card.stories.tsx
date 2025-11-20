import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, Container, Heading } from '../../lib/main';

const meta: Meta = {
  title: 'Layout/Card',
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj;

export const CardWithHeaderContentFooter: Story = {
  render: () => (
    <Container>
      <Heading title="Card with header, content, and footer" />
      <Card>
        <Card.Header title="Card Title" />
        <div>This is the card content.</div>
        <Card.Footer>Footer Content</Card.Footer>
      </Card>
    </Container>
  ),
};

export const CardWithOnlyContent: Story = {
  render: () => (
    <Container>
      <Heading title="Card with only content" />
      <Card>
        <div>Card without header or footer.</div>
      </Card>
    </Container>
  ),
};

export const CardWithHeaderOnly: Story = {
  render: () => (
    <Container>
      <Heading title="Card with header only" />
      <Card>
        <Card.Header title="Card Title" />
        <div>Content goes here.</div>
      </Card>
    </Container>
  ),
};

export const CardWithFooterOnly: Story = {
  render: () => (
    <Container>
      <Heading title="Card with footer only" />
      <Card>
        <Card.Footer>Footer Only</Card.Footer>
        <div>Content goes here.</div>
      </Card>
    </Container>
  ),
};
