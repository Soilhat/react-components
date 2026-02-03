import type { Meta } from '@storybook/react-vite';
import { Modal as ModalEl, Button, Text } from '../../lib/main';
import { useState } from 'react';

const meta: Meta<typeof ModalEl> = {
  title: 'Overlays/Modal',
  component: ModalEl,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

export const Simple = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Simple Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <Text>Simple text content</Text>
      </ModalEl>
    </div>
  );
};

export const LongContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <ModalEl.Body>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Privacy Policy & Terms</h3>
            {[...Array(15)].map((_, i) => (
              <p key={i} className="text-text-secondary dark:text-text-secondary-dark">
                Paragraph {i + 1}: This is a demonstration of how the modal handles a significant amount of content. On
                mobile, this will behave like a bottom sheet, allowing you to scroll through this text while the action
                buttons below stay pinned to the bottom.
              </p>
            ))}
          </div>
        </ModalEl.Body>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)}>Accept All</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>
  );
};

export const StandardModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Standard Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-base font-semibold dark:text-white">Deactivate Account</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-400">
                Are you sure you want to deactivate your account? All of your data will be permanently removed.
              </p>
            </div>
          </div>
        </div>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)} className="bg-red-500 text-white hover:bg-red-400">
            Deactivate
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>
  );
};
