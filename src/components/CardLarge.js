import React from 'react';

const CardLarge = ({ title }) => {
  return (
    <div className='card-large'>
      <div className='card-large__content'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='btn'>
          <a href='#0' className='card-cta'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
