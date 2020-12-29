import React from 'react';

const CardSmall = ({ title, img }) => {
  return (
    <div className='card-small'>
      <div className='card-small__image'>
        <img src={img} alt='' />
      </div>
      <div className='card-small__content'>
        <div className='card-title'>
          <h3 className='text'>{title}</h3>
        </div>
        <a href='#0' className='cta'>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default CardSmall;

// <div className='btn'>
//           <a href='#0' className='card-cta'>
//             Learn More
//           </a>
//         </div>
