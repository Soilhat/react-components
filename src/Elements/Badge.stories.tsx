import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../../lib/main';
import { Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Elements/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'destructive', 'warning', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Default Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tenant Custom',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Global (2021.1)',
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Archived',
    variant: 'destructive',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Featured Activity',
    variant: 'default',
    icon: <Sparkles className="h-3 w-3" />,
  },
};

export const VariantShowcase: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3 bg-background p-4 rounded-xl border border-border">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success" icon={<CheckCircle2 className="h-3 w-3" />}>
        Active
      </Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="destructive" icon={<AlertCircle className="h-3 w-3" />}>
        Error
      </Badge>
    </div>
  ),
};
