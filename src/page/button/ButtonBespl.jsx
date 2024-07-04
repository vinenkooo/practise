import React from 'react';

export default function Button({ className, children }) {
  function handleClick() {
    const elements = document.querySelectorAll('.pic-8, .besplatno, .free');
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
