import React from 'react';

const CardLarge = ({ title, img, btn }) => {
  return (
    <div className='card-large'>
      <img src={img} alt='' />
      <div className='card-content'>
        <div className='card-title'>
          <h3 className='title'>{title}</h3>
        </div>
        {btn ? (
          <div className='btn'>
            <a href='#0' className='cta'>
              {btn}
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardLarge;
