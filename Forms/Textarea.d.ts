interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    markdown?: boolean;
    error?: string;
}
export declare const Textarea: import('../../node_modules/react').ForwardRefExoticComponent<TextareaProps & import('../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
export {};
