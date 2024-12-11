import React, { useState } from 'react';
import RatingPage from './components/RatingPage';
import ThankYouPage from './components/ThankYouPage';
import './App.css';

const App = () => {
  const [rating, setRating] = useState(null);
  const [showRatingPage, setShowRatingPage] = useState(true);

  const handleSubmit = () => {
    setShowRatingPage(false);
  };

  return (
      <div>
        {showRatingPage ? (
          <RatingPage setRating={setRating} handleSubmit={handleSubmit} />
        ) : (
          <ThankYouPage rating={rating} />
        )}
      </div>
  );
};

export default App;





