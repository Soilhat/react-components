export interface Option {
    value: string | number;
    label: string;
}
interface SelectProps {
    label?: string;
    options: Option[];
    value: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}
export declare function Select({ label, options, value, onChange, placeholder, className, disabled, }: SelectProps): import("react/jsx-runtime").JSX.Element;
export {};
