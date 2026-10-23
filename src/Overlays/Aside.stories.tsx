import type { Meta } from '@storybook/react-vite';
import { Aside as AsideEl, Navbar, Button, Text, Input } from '../../lib/main';
import { useState, useMemo } from 'react';
import { Home, User, MessageCircle } from 'lucide-react';
import { BrowserRouter } from 'react-router-dom';

/**
 * ### Aside Component
 * A slide-over panel overlay positioned on the right (or left) edge of the viewport.
 * Ideal for multi-step forms, edit drawers, detailed inspection views, and resource creation flows.
 */
const meta: Meta<typeof AsideEl> = {
  title: 'Overlays/Aside',
  component: AsideEl,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A versatile slide-over drawer overlay providing focused context without losing main-screen continuity.',
      },
    },
  },
};
export default meta;

/**
 * **Simple Usage**
 */
export const Simple = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Simple Aside</Button>
      <AsideEl open={open} onClose={() => setOpen(false)}>
        <Text>Simple text content rendered inside a slide-over panel.</Text>
      </AsideEl>
    </div>
  );
};

/**
 * **Structured Content (Sticky Actions)**
 */
export const LongContent = () => {
  const [open, setOpen] = useState(false);

  // Generate an array of objects containing a static, unique identifier string
  const paragraphs = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: `aside-paragraph-id-${i + 1}`,
      number: i + 1,
    }));
  }, []);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content Aside</Button>
      <AsideEl open={open} onClose={() => setOpen(false)}>
        <AsideEl.Header>Privacy Policy & Terms</AsideEl.Header>
        <AsideEl.Body>
          <div className="space-y-4">
            {paragraphs.map((para) => (
              <p key={para.id} className="text-muted-foreground leading-relaxed">
                Paragraph {para.number}: Demonstrating scrollable content handling inside the Aside panel. The header
                and footer remain locked while this body area scrolls smoothly.
              </p>
            ))}
          </div>
        </AsideEl.Body>
        <AsideEl.Footer>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button onClick={() => setOpen(false)} className="flex-1">
              Accept All
            </Button>
            <Button variant="ghost" onClick={() => setOpen(false)} className="flex-1">
              Decline
            </Button>
          </div>
        </AsideEl.Footer>
      </AsideEl>
    </div>
  );
};

/**
 * **Form / Edit Drawer Workflow (Entity Creation & Updates)**
 */
export const FormDrawer = () => {
  const [open, setOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setOpen(false);
    }, 800);
  };

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Edit Student Drawer</Button>
      <AsideEl open={open} onClose={() => setOpen(false)}>
        <AsideEl.Header>
          <div>
            <p className="text-sm font-normal text-muted-foreground">Editing Student Profile</p>
            <span className="mt-0.5 block">Soilhat Monteiro</span>
          </div>
        </AsideEl.Header>
        <AsideEl.Body>
          <form id="student-form" onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <Input label="First name" defaultValue="Soilhat" required />
            </div>
            <div>
              <Input label="Last name" defaultValue="Monteiro" required />
            </div>
            <div>
              <Input label="Date of birth" type="date" defaultValue="1997-07-15" required />
            </div>
          </form>
        </AsideEl.Body>
        <AsideEl.Footer>
          <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" form="student-form" isLoading={isSaving} disabled={isSaving}>
            Save Changes
          </Button>
        </AsideEl.Footer>
      </AsideEl>
    </div>
  );
};

/**
 * **Full Mobile & Desktop Application Interaction Flow**
 */
export const FullAppInteractionFlow = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/', icon: <Home /> },
    { label: 'Messages', to: '/messages', icon: <MessageCircle /> },
    { label: 'Profile', to: '/profile', icon: <User /> },
  ];

  const sections = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      key: `aside-section-key-${i + 1}`,
      sectionNumber: i + 1,
    }));
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        brandName="Testing App"
        links={navLinks}
        layout="sidebar"
        actions={
          <Button onClick={() => setIsAsideOpen(true)} className="w-full lg:w-auto">
            Open Drawer
          </Button>
        }
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl uppercase italic">Dashboard Overview</h1>
            <p className="text-muted-foreground mt-2">
              The Aside drawer layer smoothly slides in over page content while keeping backdrop interactivity clean and
              accessible.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['analytics', 'reports', 'settings', 'logs'].map((feature, index) => (
              <div key={`feature-${feature}`} className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <h4 className="font-bold mb-2">Feature Card {index + 1}</h4>
                <Text>Placeholder content to demonstrate page depth and background layout scroll context.</Text>
              </div>
            ))}
          </div>

          <AsideEl open={isAsideOpen} onClose={() => setIsAsideOpen(false)}>
            <AsideEl.Header>System Settings & Configuration</AsideEl.Header>

            <AsideEl.Body>
              <div className="space-y-6">
                <section>
                  <h4 className="font-bold mb-2 underline decoration-primary">Drawer Navigation</h4>
                  <Text>
                    Slide-over panels excel at deep workflows, detailed inspect views, and multi-field resource updates.
                  </Text>
                </section>

                {sections.map((section) => (
                  <section key={section.key}>
                    <h4 className="font-bold mb-2 text-sm uppercase">Config Section {section.sectionNumber}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      Standard placeholder text to verify the scroll container within the Aside body. Headers and
                      footers remain pinned.
                    </p>
                  </section>
                ))}
              </div>
            </AsideEl.Body>

            <AsideEl.Footer>
              <Button onClick={() => setIsAsideOpen(false)} className="w-full sm:w-auto">
                Save Settings
              </Button>
              <Button variant="ghost" onClick={() => setIsAsideOpen(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
            </AsideEl.Footer>
          </AsideEl>
        </div>
      </Navbar>
    </BrowserRouter>
  );
};
