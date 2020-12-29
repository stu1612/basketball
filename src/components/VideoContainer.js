import React from 'react';
import CardVideo from './CardVideo';
import CardLarge from './CardLarge';
// import images
import training from '../img/cards/youth-training.jpg';
import performance from '../img/cards/performance.jpg';

const VideoContainer = () => {
  return (
    <div className='card-container'>
      <div className='cards-wrapper'>
        <CardVideo />
      </div>
      <div className='cards-wrapper'>
        <CardLarge img={training} />
        <CardLarge img={performance} />
      </div>
    </div>
  );
};

export default VideoContainer;
