interface TagInputProps {
    label?: string;
    placeholder?: string;
    tags: string[];
    suggestions?: string[];
    onChange: (tags: string[]) => void;
    className?: string;
}
export declare const TagInput: ({ label, placeholder, tags, suggestions, onChange, className }: TagInputProps) => import('../../node_modules/react').JSX.Element;
export {};
