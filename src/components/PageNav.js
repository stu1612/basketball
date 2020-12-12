import React from 'react';
//images
import logo from '../img/logos/logo.png';
import facebook from '../img/icons/facebook.png';
import twitter from '../img/icons/twitter.png';
import instagram from '../img/icons/instagram.png';
import youtube from '../img/icons/youtube.png';

const PageNav = () => {
  return (
    <div className='page-nav'>
      <div className='border-bg'></div>
      <nav className='site-nav'>
        <ul className='nav-links'>
          <li>
            <a href='#0'>
              <img src={logo} alt='t4q logo' id='logo' />
            </a>
          </li>
          <li>
            <a href='#0'>Home</a>
          </li>
          <li>
            <a href='#0'>T4Q</a>
          </li>
          <li>
            <a href='#0'>Mens</a>
          </li>
          <li>
            <a href='#0'>Youth</a>
          </li>
          <li>
            <a href='#0'>Sponsors</a>
          </li>
          <li>
            <a href='#0'>Contact</a>
          </li>
        </ul>

        <ul className='nav-links'>
          <li>
            <a href='#0' target='_blank'>
              <img src={facebook} alt='social media icon' />
            </a>
          </li>
          <li>
            <a href='#0' target='_blank'>
              <img src={instagram} alt='social media icon' />
            </a>
          </li>
          <li>
            <a href='#0' target='_blank'>
              <img src={twitter} alt='social media icon' />
            </a>
          </li>
          <li>
            <a href='#0' target='_blank'>
              <img src={youtube} alt='social media icon' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNav;
