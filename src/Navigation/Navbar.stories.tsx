import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Text, Navbar, NavLink } from '../../lib/main';
import { HomeIcon, ArrowsRightLeftIcon, UserIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    layout: { control: 'radio', options: ['sidebar', 'topbar'] },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const demoLinks: NavLink[] = [
  { label: 'Dashboard', element: <span>Dashboard</span>, icon: <HomeIcon /> },
  { label: 'Transactions', element: <span>Transactions</span>, icon: <ArrowsRightLeftIcon /> },
  { label: 'Account', element: <span>Profile</span>, icon: <UserIcon /> },
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
    // Showing how to use the mobileNav slot
    mobileNav: (
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-surface-panel dark:bg-surface-panel-dark border-t border-border dark:border-border-dark flex items-center justify-around px-6">
        <HomeIcon className="size-6 text-primary dark:text-primary-dark" />
        <ArrowsRightLeftIcon className="size-6 text-text-secondary dark:text-text-secondary-dark" />
        <UserIcon className="size-6 text-text-secondary dark:text-text-secondary-dark" />
      </div>
    ),
  },
};

export const TopbarLayout: Story = {
  args: {
    ...SidebarLayout.args,
    layout: 'topbar',
    mobileNav: (
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-surface-panel dark:bg-surface-panel-dark border-t border-border dark:border-border-dark flex items-center justify-around px-6">
        <HomeIcon className="size-6 text-primary dark:text-primary-dark" />
        <ArrowsRightLeftIcon className="size-6 text-text-secondary dark:text-text-secondary-dark" />
        <UserIcon className="size-6 text-text-secondary dark:text-text-secondary-dark" />
      </div>
    ), // Typical topbar layout might use a hamburger instead (not shown here)
  },
};
