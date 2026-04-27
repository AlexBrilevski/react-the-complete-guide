import React from 'react';
import './Card.css';

const Card = ({ className, children }) => {
  const cssClasses = 'card' + (className ? (' ' + className) : '');

  return (
    <div className={cssClasses}>{children}</div>
  );
}

export default Card;
