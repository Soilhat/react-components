import type { Meta, StoryObj } from '@storybook/react-vite';
import { StackedList, Card } from '../../lib/main';

const meta: Meta = {
  title: 'Lists/StackedList',
  component: StackedList,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <StackedList>
      <Card>
        <Card.Header title="Item 1" />
        <div>This is the first item.</div>
        <Card.Footer>Card.Footer 1</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 2" />
        <div>This is the second item.</div>
        <Card.Footer>Card.Footer 2</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 3" />
        <div>This is the third item.</div>
        <Card.Footer>Card.Footer 3</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 4" />
        <div>This is the forth item.</div>
        <Card.Footer>Card.Footer 4</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 5" />
        <div>This is the fifth item.</div>
        <Card.Footer>Card.Footer 5</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 6" />
        <div>This is the sixth item.</div>
        <Card.Footer>Card.Footer 6</Card.Footer>
      </Card>
    </StackedList>
  ),
};

export const Empty: Story = {
  render: () => <StackedList></StackedList>,
};
