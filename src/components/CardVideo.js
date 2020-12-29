import React from 'react';

const CardVideo = () => {
  return (
    <>
      <div className='card-large'>
        <div className='card-large__video'>
          <iframe
            title='iframe'
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/KJ1y5UnySp0'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='card-large'>
        <div className='card-large__video'>
          <iframe
            title='iframe'
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/JGhWYRP-ljM'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default CardVideo;
