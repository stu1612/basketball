import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carouselData from '../carouselData';

const Carousel = () => {
  // const fixtures = [
  //   {
  //     title: 'match 1',
  //   },
  //   {
  //     title: 'match 2',
  //   },
  //   {
  //     title: 'match 3',
  //   },
  //   {
  //     title: 'match 4',
  //   },
  //   {
  //     title: 'match 5',
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        {carouselData.map((fixture) => {
          return (
            <div key={fixture.title} className='carousel'>
              <h3>{fixture.title}</h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
