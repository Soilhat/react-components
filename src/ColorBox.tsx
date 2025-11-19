import React from 'react';

const ColorBox = ({ colorName = '', className = '' }) => {
  return (
    <div
      className={`w-32 h-32 rounded-lg flex items-center justify-center text-white font-bold shadow-md ${className}`}
    >
      {colorName}
    </div>
  );
};

export default ColorBox;
