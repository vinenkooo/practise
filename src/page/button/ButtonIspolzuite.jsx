// ButtonIspolzuite.jsx
import React from 'react';

export default function Button({ className, children }) {
  function handleClick() {
    const element = document.querySelector('.pic-1f');
    if (element) {
      element.classList.toggle('new-background');
    }
  }

  function handleMouseEnter() {}
  
  return (
    <button className={`${className}`} onClick={handleClick} onMouseEnter={handleClick} onMouseLeave={handleClick}>
      { children }
    </button>
  );
}
