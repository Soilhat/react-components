interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return <hr className={`${className} border-gray-200 dark:border-gray-700 my-4 dark:my-4`} />;
};

export default Divider;
