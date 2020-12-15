import React from 'react';
import CardVideo from './CardVideo';
import CardLarge from './CardLarge';

const VideoContainer = () => {
  return (
    <div className='card-container'>
      <div className='cards-wrapper'>
        <CardVideo />
      </div>
      <div className='cards-wrapper'>
        <CardLarge />
        <CardLarge />
      </div>
    </div>
  );
};

export default VideoContainer;
