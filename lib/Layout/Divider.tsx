interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return <hr className={`${className} border-border my-4`} />;
};

export default Divider;
