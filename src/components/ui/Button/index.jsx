import React from 'react';

const Button = ({ children, onClick, className, style }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

