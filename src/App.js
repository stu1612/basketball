import React from 'react';
//import style
import './styles/app.scss';
//import components/pages
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
