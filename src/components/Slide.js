import React from 'react';

const Slide = ({ fixture }) => {
  return (
    <div className='carousel'>
      <h3>{fixture.title}</h3>
      <p>{fixture.vd}</p>
    </div>
  );
};

export default Slide;
