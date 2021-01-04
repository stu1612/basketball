import React from 'react';

const Match = ({ fixture }) => {
  if (fixture.id === '1') {
    return (
      <div className='fixture'>
        <div className='fixture__teams'>
          <h2 className='home'>{fixture.home}</h2>
          <h4>2021.01.16 - GA Hallen, HBG @ 16:00 </h4>
          <h2 className='away'>{fixture.away}</h2>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Match;
