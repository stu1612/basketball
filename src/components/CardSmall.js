import React from 'react';

const CardSmall = ({ title, img }) => {
  return (
    <div className='card-small'>
      <div className='card-small__image'>
        <img src={img} alt='' />
      </div>
      <div className='card-small__content'>
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

export default CardSmall;
