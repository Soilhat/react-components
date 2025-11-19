import { forwardRef } from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children?: React.ReactNode;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(function Form(
  { children, method = 'post', className = '', ...props },
  ref
) {
  return (
    <form className={`space-y-4 ${className}`.trim()} method={method} ref={ref} {...props}>
      {children}
    </form>
  );
});

export default Form;
