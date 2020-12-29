import React from 'react';

const CardLarge = ({ title, img }) => {
  return (
    <div className='card-large'>
      <img src={img} alt='' />
      <div className='card-content'>
        <div className='card-title'>
          <h3 className='title'>{title}</h3>
        </div>
        <div className='btn'>
          <a href='#0' className='cta'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
