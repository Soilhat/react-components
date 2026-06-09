import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, CategoryTree, type TreeItem } from '../../lib/main';
import { ChevronRight, Folder, FolderOpen } from 'lucide-react';

// Define a concrete type for our stories
interface MockCategory extends TreeItem {
  id: string;
  name: string;
  parent_id?: string | null;
  color: string;
}

const meta: Meta<typeof CategoryTree<MockCategory>> = {
  title: 'Layout/CategoryTree',
  component: CategoryTree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryTree<MockCategory>>;

// 1. Mock Data: Multi-level hierarchy
const mockCategories: MockCategory[] = [
  { id: '1', name: 'Housing', parent_id: null, color: '#f87171' },
  { id: '2', name: 'Rent', parent_id: '1', color: '#f87171' },
  { id: '3', name: 'Utilities', parent_id: '1', color: '#f87171' },
  { id: '4', name: 'Internet', parent_id: '3', color: '#f87171' }, // Deep nesting
  { id: '5', name: 'Food', parent_id: null, color: '#fbbf24' },
  { id: '6', name: 'Groceries', parent_id: '5', color: '#fbbf24' },
  { id: '7', name: 'Dining Out', parent_id: '5', color: '#fbbf24' },
];

// 2. Base Template Logic
const defaultRender = (item: MockCategory, level: number) => (
  <div className={`flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors cursor-pointer`}>
    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
    <span className={`${level === 0 ? 'font-bold' : 'text-muted-foreground'} text-sm`}>{item.name}</span>
  </div>
);

/**
 * Default view showing a standard financial category hierarchy.
 */
export const Default: Story = {
  args: {
    items: mockCategories,
    renderItem: defaultRender,
  },
  render: (args) => <CategoryTree {...args} />,
};

/**
 * Demonstrates deep nesting to test the recursive indentation and border-left lines.
 */
export const DeeplyNested: Story = {
  args: {
    items: [
      { id: '1', name: 'Root Level', parent_id: null, color: '#3b82f6' },
      { id: '2', name: 'Level 1', parent_id: '1', color: '#3b82f6' },
      { id: '3', name: 'Level 2', parent_id: '2', color: '#3b82f6' },
      { id: '4', name: 'Level 3', parent_id: '3', color: '#3b82f6' },
    ],
    renderItem: defaultRender,
  },
};

/**
 * Visualizing how it looks with custom interactive elements (like edit buttons).
 */
export const Interactive: Story = {
  args: {
    items: mockCategories,
    renderItem: (item, level) => (
      <div className="flex items-center justify-between group p-2 hover:bg-background rounded-md">
        <div className="flex items-center gap-2 text-sm font-medium">
          {level > 0 && <span className="text-muted-foreground">↳</span>}
          {item.name}
        </div>
        <Button variant="ghost">Edit</Button>
      </div>
    ),
  },
};

const FolderIconRender = ({ isExpanded, hasChildren }: { isExpanded: boolean; hasChildren: boolean }) => {
  if (!hasChildren) {
    return <div className="h-4 w-4 ml-1 border-b-2 border-l-2 border-border rounded-bl-sm" />;
  }
  return isExpanded ? <FolderOpen className="h-4 w-4 text-primary" /> : <Folder className="h-4 w-4 text-primary" />;
};

export const Expandable: Story = {
  args: {
    items: mockCategories,
    renderItem: (item, level, { isExpanded, toggle, hasChildren }) => (
      <button
        onClick={hasChildren ? toggle : undefined}
        className={`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          ${level === 0 ? 'bg-card font-bold' : 'hover:bg-background'}
        `}
        onKeyDown={toggle}
      >
        {/* Chevron Icon */}
        {hasChildren && (
          <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
        )}

        {/* Folder Icon */}
        <FolderIconRender isExpanded={isExpanded} hasChildren={hasChildren} />

        <span className="text-sm text-muted-foreground">{item.name}</span>
      </button>
    ),
  },
};
