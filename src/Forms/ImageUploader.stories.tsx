import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageUploader } from '../../lib/main';
import { fn } from 'storybook/test';

const meta: Meta = {
  title: 'Forms/ImageUploader',
  component: ImageUploader,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholderImageUrl: 'https://images.unsplash.com/photo-1544724759-e2e242adb0db',
    uploadImage: fn(async (file: File) => {
      // Simulate an upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Return a mock URL for the uploaded image
      return file.name;
    }),
  },
  play: async ({ args, canvas, userEvent }) => {
    // Simulate user uploading an image
    const file = new File(['(⌐□_□)'], 'cool-image.png', { type: 'image/png' });
    const input = canvas.getByTestId('inputImageUploader') as HTMLInputElement;
    await userEvent.upload(input, file);
    // Wait for the uploadImage function to be called
    await args.uploadImage;
  },
};
