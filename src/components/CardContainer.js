import React from 'react';

const CardContainer = () => {
  return (
    <section className='card-container'>
      <div className='cards-large'>
        <div className='card-large'>
          <div className='card-large__content'>
            <div className='card-title'>
              <h3>
                <span>Mens Team</span> Lorem ipsum dolor sit amet.
              </h3>
            </div>
            <div className='btn'>
              <a href='#0' className='card-cta'>
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className='card-large'>
          <div className='card-large__content'>
            <div className='card-title'>
              <h3>
                <span>Mens Team</span> Lorem ipsum dolor sit amet.
              </h3>
            </div>
            <div className='btn'>
              <a href='#0' className='card-cta'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
