export interface ComboOption {
    value: string | number;
    label: string;
    description?: string;
}
interface ComboboxProps {
    label?: string;
    options: ComboOption[];
    value?: string | number;
    defaultValue?: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    error?: string;
    className?: string;
}
export declare function SearchableCombobox({ label, options, value, defaultValue, onChange, placeholder, error, className, }: Readonly<ComboboxProps>): import("react/jsx-runtime").JSX.Element;
export {};
