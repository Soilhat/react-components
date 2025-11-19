import { forwardRef, useState, type MouseEvent } from 'react';
import ReactMarkdown from 'react-markdown';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  markdown?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, markdown = false, name, className, rows = 4, onChange, defaultValue, ...props },
  ref
) {
  const [isPreview, setIsPreview] = useState(false);
  const [text, setText] = useState(defaultValue?.toString() || '');

  const previewVisibility = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsPreview(!isPreview);
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div>
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      {markdown && (
        <div className="flex items-center mt-2">
          <div className="flex gap-2">
            <button
              onClick={previewVisibility}
              disabled={!isPreview}
              className="rounded-md border border-transparent dark:bg-gray-950 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-700 hover:text-black hover:dark:text-white aria-selected:bg-gray-100 aria-selected:dark:bg-gray-700 aria-selected:text-black aria-selected:dark:text-white"
              role="tab"
              aria-selected={!isPreview}
              tabIndex={0}
            >
              Write
            </button>
            <button
              onClick={previewVisibility}
              disabled={isPreview}
              className="rounded-md border border-transparent dark:bg-gray-950 px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-700 hover:text-black hover:dark:text-white aria-selected:bg-gray-100 aria-selected:dark:bg-gray-700 aria-selected:text-black aria-selected:dark:text-white"
              role="tab"
              aria-selected={isPreview}
              tabIndex={-1}
            >
              Preview
            </button>
          </div>
        </div>
      )}
      <div className="mt-2" role="tabpanel" tabIndex={0} hidden={isPreview}>
        <textarea
          className={`${className} block w-full rounded-md outline -outline-offset-1 outline-transparent border-gray-300 shadow-sm focus:border-accent focus:ring-accent text-base sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white px-3 py-1.5`}
          ref={ref}
          rows={rows}
          name={name}
          onChange={handleChange}
          defaultValue={defaultValue}
          {...props}
        />
      </div>
      <div
        role="tabpanel"
        tabIndex={0}
        hidden={!isPreview}
        className={`${className} markdown mt-2 block w-full rounded-md outline -outline-offset-1 outline-transparent border-gray-300 shadow-sm text-base sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white px-3 py-1.5`}
      >
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
});
