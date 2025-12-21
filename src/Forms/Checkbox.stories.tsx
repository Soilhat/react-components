import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../../lib/main';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accepter les conditions',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Notifications Flash',
    description: 'Recevez des alertes en temps réel pour vos recettes favorites.',
    containerClassName: 'max-w-sm border border-border rounded-xl',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Ingrédients (Sélection partielle)',
    description: '4 articles sur 10 sélectionnés',
    indeterminate: true,
    checked: false,
  },
};

export const ComplexCard: Story = {
  args: {
    label: 'Option Premium',
    description: (
      <div className="mt-2 p-2 bg-primary/10 rounded border border-primary/20 text-xs">
        <p>Inclus : Recettes illimitées, mode hors-ligne et export PDF.</p>
      </div>
    ),
    containerClassName: 'w-80 border-2 border-primary/20 shadow-sm',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Option indisponible',
    disabled: true,
    description: 'Cette option nécessite un abonnement actif.',
  },
};
