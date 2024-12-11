import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <button className="submit-button" onClick={onClick}>
      SUBMIT
    </button>
  );
};

export default SubmitButton;
