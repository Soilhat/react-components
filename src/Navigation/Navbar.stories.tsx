import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Text, Navbar } from '../../lib/main';
import { HomeIcon, ArrowsRightLeftIcon, UserIcon } from '@heroicons/react/24/outline';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    layout: { control: 'radio', options: ['sidebar', 'topbar'] },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const demoLinks = [
  { label: 'Dashboard', to: '/', icon: <HomeIcon className="size-5" /> },
  { label: 'Transactions', to: '/transactions', icon: <ArrowsRightLeftIcon className="size-5" /> },
  { label: 'Account', to: '/account', icon: <UserIcon className="size-5" /> },
];

export const SidebarLayout: Story = {
  args: {
    layout: 'sidebar',
    brandName: 'Components',
    logoURl: 'https://soilhat.github.io/react-components/assets/soilhat-logo.png',
    links: demoLinks,
    actions: <Button className="w-full">Sign Out</Button>,
    children: (
      <div className="space-y-4">
        <Text variant="h1">Dashboard</Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-32 bg-surface-panel dark:bg-surface-panel-dark border border-border dark:border-border-dark rounded-xl"
            />
          ))}
        </div>
      </div>
    ),
  },
};

export const TopbarLayout: Story = {
  args: {
    ...SidebarLayout.args,
    layout: 'topbar',
  },
};
