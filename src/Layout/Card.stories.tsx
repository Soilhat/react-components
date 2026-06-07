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
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>This is a description for the card.</Card.Description>
        </Card.Header>
        <Card.Body>
          <div>This is the card content.</div>
        </Card.Body>
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
        <Card.Body>
          <div>Card without header or footer.</div>
        </Card.Body>
      </Card>
    </Container>
  ),
};

export const CardWithHeaderOnly: Story = {
  render: () => (
    <Container>
      <Heading title="Card with header only" />
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <div>Content goes here.</div>
        </Card.Body>
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
      </Card>
    </Container>
  ),
};
