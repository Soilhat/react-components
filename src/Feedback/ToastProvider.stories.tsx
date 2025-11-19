import { Button } from '../../lib/Elements';
import { ToastProvider, useToast } from '../../lib/Feedback';

export default {
  title: 'Feedback/ToastProvider',
  component: ToastProvider,
};

export const BasicUsage = () => (
  <ToastProvider>
    <DemoButton />
  </ToastProvider>
);

function DemoButton() {
  const toast = useToast();
  return (
    <Button onClick={() => toast.success('This is a success toast!')} color_name="success">
      Show Success Toast
    </Button>
  );
}

export const CustomDurationAndType = () => (
  <ToastProvider>
    <CustomDemo />
  </ToastProvider>
);

function CustomDemo() {
  const toast = useToast();
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button onClick={() => toast.error('Error occurred!', 4000)} color_name="danger">
        Show Error Toast
      </Button>
      <Button onClick={() => toast.info('Some info for you.', 2000)} color_name="info">
        Show Info Toast
      </Button>
    </div>
  );
}
