import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const ThemeToggle = ({ onToggle }: { onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="p-2.5 rounded-xl text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-all cursor-pointer border border-transparent active:scale-95"
  >
    <SunIcon className="size-5 hidden dark:block animate-in fade-in zoom-in-75 duration-200" />
    <MoonIcon className="size-5 block dark:hidden animate-in fade-in zoom-in-75 duration-200" />
  </button>
);

export default ThemeToggle;
