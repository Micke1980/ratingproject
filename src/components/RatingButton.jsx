import React from 'react';

const RatingButton = ({ value, onClick, isSelected, isPreviousSelected }) => {
  return (
    <button
      className={`rating-button 
        ${isSelected ? 'selected' : ''} 
        ${isPreviousSelected ? 'previous' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default RatingButton;
