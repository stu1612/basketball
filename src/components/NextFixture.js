import React from 'react';
//import images
import logo from '../img/logos/logo.png';

const NextFixture = () => {
  return (
    <div className='fixture'>
      <div className='fixture__teams'>
        <div className='team home'>
          <h2>team4q</h2>
        </div>
        <div className='vs'>VS</div>
        <div className='team away'>
          <h2>Kalmar</h2>
        </div>
      </div>
      <div className='fixture__schedule'>
        <img src={logo} alt='' />
        <p>18/12/20 @ 16:00 - GA-Hallens, Hbg</p>
      </div>
    </div>
  );
};
export default NextFixture;
