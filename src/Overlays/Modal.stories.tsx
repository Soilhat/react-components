import type { Meta } from '@storybook/react-vite';
import { Modal as ModalEl, Navbar, Button, Text } from '../../lib/main';
import { useState } from 'react';
import { HomeIcon, UserIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { BrowserRouter } from 'react-router-dom';

/**
 * ### Modal Component
 * A versatile overlay that functions as a **Centered Dialog** on desktop and
 * automatically transforms into a **Responsive Bottom Sheet** on mobile devices.
 * * #### Key Features
 * - **Compound Component Pattern**: Use `Modal.Header`, `Modal.Body`, and `Modal.Footer` for structured layouts.
 * - **Adaptive UI**: Rounded-top "drawer" style on mobile; centered card on desktop.
 * - **Focus & Scroll Management**: Automatically locks body scroll when open and handles 'Escape' key to close.
 * - **Z-Index Layering**: Optimized with `z-[100]` to ensure visibility over fixed Navbars and Bottom Bars.
 * * #### Basic Implementation
 * ```tsx
 * <Modal open={isOpen} onClose={() => setIsOpen(false)}>
 * <Modal.Header>Title</Modal.Header>
 * <Modal.Body>Content goes here...</Modal.Body>
 * <Modal.Footer>
 * <Button onClick={onClose}>Close</Button>
 * </Modal.Footer>
 * </Modal>
 * ```
 */
const meta: Meta<typeof ModalEl> = {
  title: 'Overlays/Modal',
  component: ModalEl,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'An adaptive overlay that balances desktop dialogs with mobile bottom-sheet ergonomics.',
      },
    },
  },
};
export default meta;

/**
 * **Simple Usage**
 * * Use this for quick alerts or short messages. If you don't use the sub-components (`Header`, `Body`),
 * the Modal will wrap your children in a default padding container.
 */
export const Simple = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Simple Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <Text>Simple text content without specific structural components.</Text>
      </ModalEl>
    </div>
  );
};

/**
 * **Structured Content (Sticky Actions)**
 * * Using `Modal.Header`, `Modal.Body`, and `Modal.Footer` ensures that the header and footer
 * stay visible while the body area becomes scrollable if the content is too long.
 */
export const LongContent = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <ModalEl.Header>
          <h3 className="text-xl font-bold">Privacy Policy & Terms</h3>
        </ModalEl.Header>
        <ModalEl.Body>
          <div className="space-y-4">
            {[...Array(15)].map((_, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                Paragraph {i + 1}: This is a demonstration of how the modal handles a significant amount of content. On
                mobile, this will behave like a bottom sheet, allowing you to scroll through this text while the action
                buttons below stay pinned to the bottom.
              </p>
            ))}
          </div>
        </ModalEl.Body>
        <ModalEl.Footer>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button onClick={() => setOpen(false)} className="flex-1">
              Accept All
            </Button>
            <Button variant="ghost" onClick={() => setOpen(false)} className="flex-1">
              Decline
            </Button>
          </div>
        </ModalEl.Footer>
      </ModalEl>
    </div>
  );
};

/**
 * **Complex Layout / Destructive Actions**
 * * You can combine standard HTML/Tailwind structures inside the Modal for more complex
 * designs like account deactivation confirmations.
 */
export const StandardModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Standard Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <div className="sm:flex sm:items-start p-2">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-danger/10 sm:mx-0 sm:size-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-danger"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-bold">Deactivate Account</h3>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">
                Are you sure you want to deactivate your account? All of your data will be permanently removed from our
                servers.
              </p>
            </div>
          </div>
        </div>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)} className="bg-danger text-danger-foreground hover:bg-danger">
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

/**
 * **Full Mobile Interaction Flow**
 * * This story demonstrates how the Modal interacts with the `Navbar` and `BottomBar`.
 * **Switch to Mobile View** to see how the Modal appears as a bottom sheet over the navigation.
 */
export const MobileBottomSheetFlow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/', icon: <HomeIcon /> },
    { label: 'Messages', to: '/messages', icon: <ChatBubbleLeftRightIcon /> },
    { label: 'Profile', to: '/profile', icon: <UserIcon /> },
  ];

  return (
    <BrowserRouter>
      <Navbar
        brandName="Testing App"
        links={navLinks}
        layout="sidebar"
        actions={
          <Button onClick={() => setIsModalOpen(true)} className="w-full lg:w-auto">
            View Legal Terms
          </Button>
        }
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl uppercase italic">Dashboard Overview</h1>
            <p className="text-muted-foreground mt-2">
              This dashboard uses a sidebar on desktop and a fixed bottom bar on mobile. The Modal is configured to sit
              above all navigation elements.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <h4 className="font-bold mb-2">Feature Card {i}</h4>
                <Text>Placeholder content to demonstrate page depth and scrolling context.</Text>
              </div>
            ))}
          </div>

          <ModalEl open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalEl.Header>Privacy Policy & Terms of Service</ModalEl.Header>

            <ModalEl.Body>
              <div className="space-y-6">
                <section>
                  <h4 className="font-bold mb-2 underline decoration-primary">1. Introduction</h4>
                  <Text>
                    Welcome to our platform. On mobile devices, notice how this modal slides from the bottom and
                    features a pull-handle. It respects the "Safe Area" of modern smartphones.
                  </Text>
                </section>

                {[...Array(5)].map((_, i) => (
                  <section key={i}>
                    <h4 className="font-bold mb-2 text-sm uppercase">Legal Section {i + 2}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      Standard placeholder text for verifying the scroll container within the modal body. The header and
                      footer remain pinned during this scroll action.
                    </p>
                  </section>
                ))}
              </div>
            </ModalEl.Body>

            <ModalEl.Footer>
              <Button onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto">
                I Accept
              </Button>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
            </ModalEl.Footer>
          </ModalEl>
        </div>
      </Navbar>
    </BrowserRouter>
  );
};
