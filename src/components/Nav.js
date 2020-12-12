import React from 'react';
// components
import DisplayNav from './DisplayNav';
import PageNav from './PageNav';

const Nav = () => {
  return (
    <nav className='main-navigation'>
      <DisplayNav />
      <PageNav />
    </nav>
  );
};

export default Nav;
