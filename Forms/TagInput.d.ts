interface TagInputProps {
    label?: string;
    placeholder?: string;
    tags: string[];
    onChange: (tags: string[]) => void;
    className?: string;
}
export declare const TagInput: ({ label, placeholder, tags, onChange, className }: TagInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
