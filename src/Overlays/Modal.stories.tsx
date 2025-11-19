import type { Meta } from '@storybook/react-vite';
import { Modal as ModalEl } from '../../lib/Overlays/Modal';
import { Button } from '../../lib/Elements';
import { useState } from 'react';

const meta: Meta = {
  title: 'Overlays/Modal',
  parameters: {
    layout: 'centered',
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Open modal' }));
  },
};
export default meta;

export const Simple = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        Simple text{' '}
      </ModalEl>
    </div>
  );
};

export const Modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
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
            <h3 className="text-base font-semibold text-white">Testing Modal</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-400">Some text to inform user about anything.</p>
            </div>
          </div>
        </div>
        <ModalEl.Footer>
          <Button
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
          >
            Deactivate
          </Button>
          <Button
            data-autofocus
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex justify-center bg-white/10 px-3 py-2 text-sm text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
          >
            Cancel
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>
  );
};
