import React from 'react';
import Carousel from 'react-elastic-carousel';
import fixtures from '../fixtures';
import styled from 'styled-components';

const Fixtures = () => {
  let breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <Carousel breakPoints={breakPoints}>
      {fixtures.map((fixture) => (
        <SlideStyle>
          <h3>{fixture.home}</h3>
          <p>{fixture.vs}</p>
          <h3>{fixture.away}</h3>
        </SlideStyle>
      ))}
    </Carousel>
  );
};

const SlideStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 1em;
`;

export default Fixtures;
