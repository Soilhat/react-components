export interface Option {
    value: string | number;
    label: string;
    description?: string;
}
interface SelectProps {
    label?: string;
    options: Option[];
    value?: string | number;
    defaultValue?: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}
export declare function Select({ label, options, value, defaultValue, onChange, placeholder, className, disabled, }: Readonly<SelectProps>): import("react/jsx-runtime").JSX.Element;
export {};
