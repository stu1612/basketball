import React from 'react';
//import infinite slider
import Slider from 'infinite-react-carousel';

const BannerSponsor = () => {
  let settings = {
    arrows: false,
    pauseOnHover: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 6000,
    duration: 500,
    swipe: false,
  };
  return (
    <section className='testing'>
      <Slider {...settings}>
        <div className='banner-sponsor__inner'>
          <h2>This is Cool !</h2>
        </div>
        <div className='banner-sponsor__inner'>
          <h2>This is Coolerrrrr !</h2>
        </div>
      </Slider>
    </section>
  );
};

export default BannerSponsor;

// <div className='banner-sponsor'>
// <div className='banner-sponsor__inner'>
//   <h2>This is Cool !</h2>
// </div>
// </div>
// <div className='banner-sponsor'>
// <div className='banner-sponsor__inner'>
//   <h2>This is Cool !</h2>
// </div>
// </div>
