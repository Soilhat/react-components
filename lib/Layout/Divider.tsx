interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return <hr className={`${className} border-border dark:border-border-dark my-4 dark:my-4`} />;
};

export default Divider;
