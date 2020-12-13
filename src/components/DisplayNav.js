import React from 'react';
// images
import edument from '../img/logos/edument.png';
import intersport from '../img/logos/intersport.png';
import swedbank from '../img/logos/swedbank.png';
import direkten from '../img/logos/direkten.png';
import loka from '../img/logos/loka.png';
import sparbank from '../img/logos/sparbank.png';
import players from '../img/nav/players-nobg.png';

const DisplayNav = () => {
  return (
    <nav className='display-nav'>
      <ul className='nav-links'>
        <li>
          <a href='#0' target='_blank'>
            <img className='nav-img' src={direkten} alt='sponsor logo' />
          </a>
        </li>
        <li>
          <a href='#0' target='_blank'>
            <img className='nav-img' src={edument} alt='sponsor logo' />
          </a>
        </li>
        <li>
          <a href='#0' target='_blank'>
            <img className='nav-img' src={swedbank} alt='sponsor logo' />
          </a>
        </li>
        <li>
          <a href='#0' target='_blank'>
            <img className='nav-img' src={intersport} alt='sponsor logo' />
          </a>
        </li>
        <li>
          <a href='#0' target='_blank'>
            <img className='nav-img' src={sparbank} alt='sponsor logo' />
          </a>
        </li>
        <li>
          <a href='#0' target='_blank'>
            <img className='nav-img' src={loka} alt='sponsor logo' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DisplayNav;
// <div className='image'>
//   <img src={players} alt='t4q shirt sponsor advertisment' />
// </div>
