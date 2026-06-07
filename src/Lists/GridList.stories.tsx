import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridList, Card } from '../../lib/main';

const meta: Meta = {
  title: 'Lists/GridList',
  component: GridList,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    items: { control: 'object' },
    columns: { control: 'number' },
    gap: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
};
export default meta;

type Story = StoryObj;

const items = [
  { id: 1, title: 'Item 1', description: 'This is the first item.' },
  { id: 2, title: 'Item 2', description: 'This is the second item.' },
  { id: 3, title: 'Item 3', description: 'This is the third item.' },
  { id: 4, title: 'Item 4', description: 'This is the forth item.' },
  { id: 5, title: 'Item 5', description: 'This is the fifth item.' },
  { id: 6, title: 'Item 6', description: 'This is the sixth item.' },
];

const renderItem = (item: (typeof items)[0]) => (
  <Card>
    <Card.Header>
      <Card.Title>{item.title}</Card.Title>
    </Card.Header>
    <Card.Body>{item.description}</Card.Body>
    <Card.Footer>Card.Footer {item.id}</Card.Footer>
  </Card>
);

export const Default: Story = {
  args: {
    items,
    renderItem,
    columns: 3,
    gap: 'md',
  },
};

export const Empty: Story = {
  args: {
    items: [],
    renderItem,
    columns: 3,
    gap: 'md',
  },
};
