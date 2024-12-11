import React, { useState } from 'react';
import Card from './Card';
import RatingButton from './RatingButton';
import SubmitButton from './SubmitButton';
import iconStar from '../assets/icon-star.svg'; 

const RatingPage = ({ setRating, handleSubmit }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
    setRating(rating);
  };

  return (
    <div className="card-container">
      <div className="backgroundcontainer">
    <Card>
      <div className={`star-icon ${selectedRating ? 'selected' : ''}`}>
        <img src={iconStar} alt="Star icon" style={{ width: '20px' }} />
      </div>
      <h2 className="overpass-custom">How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
      <div className="rating-buttons">
        {[1, 2, 3, 4, 5].map((num) => (
          <RatingButton
            key={num}
            value={num}
            onClick={() => handleRatingSelect(num)}
            isSelected={selectedRating === num}
            isPreviousSelected={selectedRating - 1 === num}
          />
        ))}
      </div>
      <SubmitButton onClick={handleSubmit} />
    </Card>
    </div>
    </div>
  );
};

export default RatingPage;

