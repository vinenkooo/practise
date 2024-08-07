import React from 'react';

export default function ButtonSave({ className, children, onClick }) {
  function handleClick() {
    if (onClick) {
      onClick();  
    }
  }
  
  function handleMouseEnter() {}

  return (
    <button className={`button ${className}`} onClick={handleClick} onMouseEnter={handleMouseEnter}>
      { children }
    </button>
  );
}
