import React from 'react';
import Card from './Card';
import thankYouImage from '../assets/illustration-thank-you.svg';  

const ThankYouPage = ({ rating }) => {
  return (
    <div className="thankyoucontainer">
    <Card>
      <div className="card1">
      <img src={thankYouImage} alt="Thank You illustration" style={{ width: '150px', margin: '20px auto' }} />  
      <p className="rating">You selected {rating} out of 5.</p>
      <h2 className="thankyou">Thank You!</h2>
      <p className="text"> We appreciate you taking the time to give a rating. If you ever need more support, 
          dont hesitate to get in touch!
      </p>
      </div>
      
    </Card>
    </div>
  );
};

export default ThankYouPage;
