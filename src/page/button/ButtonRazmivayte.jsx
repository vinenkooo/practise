// ButtonRazmivayte.jsx
import React from 'react';

export default function Button({ className, children }) {
  function handleClick() {
    const element = document.querySelector('.img-1c');
    const elements = document.querySelectorAll('.img-1c, .razmivayte_white, .blur');
    if (elements.length > 0) {
      elements.forEach(element => {
        if (element) {
          element.classList.toggle('new-background');
        }
      });
    }
  }
  function handleMouseEnter() {}
  
  return (
    <button className={`${className}`} onClick={handleClick} onMouseEnter={handleClick} onMouseLeave={handleClick}>
      { children }
    </button>
  );
}