import React from 'react';
import CardLarge from './CardLarge';
import CardSmall from './CardSmall';
// import images
import lakers from '../img/cards/sasa-with-lakers.jpg';
import mens from '../img/cards/card_mens.jpg';
import youth from '../img/cards/card_youth.jpg';
import sponsor from '../img/cards/card_sponsor.jpg';
import contact from '../img/cards/card_contact.jpg';

const CardContainer = () => {
  return (
    <section className='card-container'>
      <div className='cards-wrapper'>
        <CardLarge btn='learn more' title='Mens: join the fight' img={mens} />
        <CardLarge
          btn='learn more'
          title='Youth: building the future'
          img={youth}
        />
      </div>
      <div className='cards-wrapper'>
        <CardSmall
          btn='learn more'
          title='team4q journey to superettan'
          img={lakers}
        />
        <CardSmall
          btn='learn more'
          title='want to join us ? Just ask !'
          img={contact}
        />
        <CardSmall
          btn='learn more'
          title='want to join the team4q family ?'
          img={sponsor}
        />
      </div>
    </section>
  );
};

export default CardContainer;
