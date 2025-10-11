
import React from 'react';
import './Home.css';
import Highlights from './highlights/Highlights';
import Benefits from './benefits/Benefits';
import AboutUs from './aboutUs/AboutUs';

function Home() {
  return (
    <>
      <Highlights />
      <Benefits />
      <AboutUs />
    </>
  );
}

export default Home;