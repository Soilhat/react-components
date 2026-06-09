import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ onToggle }: { onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="p-2.5 rounded-xl text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-all cursor-pointer border border-transparent active:scale-95"
  >
    <Sun className="size-5 hidden dark:block animate-in fade-in zoom-in-75 duration-200" />
    <Moon className="size-5 block dark:hidden animate-in fade-in zoom-in-75 duration-200" />
  </button>
);

export default ThemeToggle;
