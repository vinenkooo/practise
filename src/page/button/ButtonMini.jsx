import React from 'react';

export default function Button({ className, children }) {
  function handleClick() {}
  function handleMouseEnter() {}
  
  return (
    <button className={`button ${className}`} onClick={handleClick} onMouseEnter={handleMouseEnter}>
      { children }
    </button>
  );
}