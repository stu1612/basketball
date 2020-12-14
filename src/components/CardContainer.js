import React from 'react';
import CardLarge from './CardLarge';
import CardSmall from './CardSmall';
// import images
import lakers from '../img/cards/sasa-with-lakers.jpg';

const CardContainer = () => {
  return (
    <section className='card-container'>
      <div className='cards-wrapper'>
        <CardLarge title='Mens' />
        <CardLarge title='Youth' />
      </div>
      <div className='cards-wrapper'>
        <CardSmall title='Card 1' img={lakers} />
        <CardSmall title='Card 2' />
        <CardSmall title='Card 3' />
      </div>
    </section>
  );
};

export default CardContainer;
