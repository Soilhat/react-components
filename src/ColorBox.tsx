const ColorBox = ({ colorName = '', className = '' }) => {
  return (
    <div className={`${className} min-w-32 h-32 rounded-lg flex items-center justify-center font-bold shadow-md`}>
      {colorName}
    </div>
  );
};

export default ColorBox;
