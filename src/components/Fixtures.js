import React from 'react';
// import carousel npm
import Carousel from 'react-elastic-carousel';
// import fixtures data file
import fixtures from '../fixtures';
// import style
import styled from 'styled-components';
// import images
import superetttan from '../img/logos/superettan.png';

const Fixtures = () => {
  let breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 850, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  // function getBackgroundColor(status) {
  //   const backgroundColorByStatus = {
  //     win: 'green',
  //     lose: 'red',
  //     draw: 'grey',
  //   };
  // }

  return (
    <Carousel breakPoints={breakPoints}>
      {fixtures.map((fixture) => (
        <SlideStyle>
          <div className='top'>
            <img src={superetttan} alt='superettan logo' />
            <h3 className='superettan'>Supperettan</h3>
            <h4 className='small'>{fixture.date}</h4>
            <h5 className='small'>{fixture.place}</h5>
          </div>
          <div className='bottom'>
            <h3 className='bold'>{fixture.home}</h3>
            <div>
              <h5
                className='result'
                style={{
                  backgroundColor: fixture.time
                    ? 'grey'
                    : fixture.status === 'lose'
                    ? 'red'
                    : 'green',
                }}
              >
                {fixture.time ? fixture.time : fixture.result}
              </h5>
            </div>
            <h3 className='bold'>{fixture.away}</h3>
          </div>
        </SlideStyle>
      ))}
    </Carousel>
  );
};

const SlideStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 90vh;
  width: 100%;
  background-color: white;
  color: black;
  margin: 0;
  font-size: 1em;
  border-radius: 15px;
  font-family: system-ui;
  transition: 250ms filter ease-in-out;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(2px 4px 6px black);
  }
  &:focus {
    outline: none;
  }
  img {
    object-fit: contain;
    height: 50px;
    width: 50px;
  }
  .superettan {
    margin-bottom: 0.5rem;
    color: #004987;
    font-size: 2rem;
  }
  .small {
    font-weight: 200;
    font-size: 1.2rem;
  }
  .bold {
    text-transform: uppercase;
    padding: 0.5rem 0;
    font-size: 2rem;
    font-weight: 400;
  }

  .match {
    background: grey;
  }
  .result {
    /* background: grey; */
    padding: 0.5rem 1rem;
    line-height: 1;
    color: white;
    font-size: 2rem;
  }

  @media (min-width: 600px) {
    height: 70vh;
    margin: 15px;
    .bold,
    .superettan {
      font-size: 1.5rem;
    }
    .small {
      font-size: 1rem;
    }
  }
  @media (min-width: 1200px) {
    height: 55vh;
  }
  @media (min-width: 1600px) {
    height: 45vh;
  }
`;

export default Fixtures;
