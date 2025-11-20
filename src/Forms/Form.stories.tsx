import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form, Input, Textarea } from '../../lib/main';

const meta: Meta = {
  title: 'Forms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Submitted!');
      }}
    >
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Textarea label="Message" name="message" placeholder="Type your message..." />
      <button type="submit">Submit</button>
    </Form>
  ),
};
