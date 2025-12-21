export interface Option {
    id: string | number;
    label: string;
    [key: string]: unknown;
}
interface SelectProps<T extends Option> {
    options: T[];
    value?: T;
    onChange: (value: T) => void;
    label?: string;
    placeholder?: string;
}
export declare function Select<T extends Option>({ options, value, onChange, label, placeholder, }: SelectProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
