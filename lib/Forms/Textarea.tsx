import { forwardRef, useState, type MouseEvent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  markdown?: boolean;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, markdown = false, error, name, className, rows = 4, onChange, defaultValue, value, ...props },
  ref
) {
  const [isPreview, setIsPreview] = useState(false);
  const [text, setText] = useState(value?.toString() || defaultValue?.toString() || '');

  useEffect(() => {
    if (value !== undefined) setText(value.toString());
  }, [value]);

  const togglePreview = (event: MouseEvent<HTMLButtonElement>, showPreview: boolean) => {
    event.preventDefault();
    setIsPreview(showPreview);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (onChange) onChange(event);
  };

  const panelClasses = `
    w-full rounded-lg border transition-all duration-200 p-3 text-base sm:text-sm
    ${error ? 'border-state-danger dark:border-state-danger-dark' : 'border-border dark:border-border-dark'}
    bg-surface-panel dark:bg-surface-panel-dark
    text-text-primary dark:text-text-primary-dark
  `;

  return (
    <div className="flex flex-col w-full space-y-2">
      <div className="flex items-center justify-between">
        {label && (
          <label className="label" htmlFor={name}>
            {label}
          </label>
        )}

        {markdown && (
          <div
            className="flex bg-surface-base dark:bg-surface-base-dark p-1 rounded-lg border border-border dark:border-border-dark"
            role="tablist"
          >
            <button
              type="button"
              onClick={(e) => togglePreview(e, false)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                isPreview ? 'text-text-secondary hover:text-text-primary' : 'bg-primary text-text-on-primary shadow-sm'
              }`}
              role="tab"
              aria-selected={!isPreview}
            >
              Write
            </button>
            <button
              type="button"
              onClick={(e) => togglePreview(e, true)}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                isPreview ? 'bg-primary text-text-on-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'
              }`}
              role="tab"
              aria-selected={isPreview}
            >
              Preview
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        {/* Editor Panel */}
        <div hidden={isPreview}>
          <textarea
            id={name}
            name={name}
            ref={ref}
            rows={rows}
            onChange={handleChange}
            value={text}
            className={`
              ${panelClasses} 
              focus:ring-4 focus:ring-state-focus/20 focus:border-state-focus focus:outline-none
              placeholder:text-text-secondary/50
              ${className}
            `}
            {...props}
          />
        </div>

        {/* Preview Panel */}
        {isPreview && (
          <div
            className={`
              ${panelClasses} 
              markdown min-h-[calc(${rows}*1.5rem+1.5rem)]
              overflow-y-auto bg-surface-base/10
              ${className}
            `}
            role="tabpanel"
          >
            {text ? (
              <ReactMarkdown>{text}</ReactMarkdown>
            ) : (
              <span className="text-text-secondary italic">Nothing to preview</span>
            )}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-state-danger dark:text-state-danger-dark font-medium">{error}</p>}
    </div>
  );
});
