import React from 'react';
// import components
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import BannerSupport from '../components/BannerSupport';
import VideoContainer from '../components/VideoContainer';
import BannerSponsor from '../components/BannerSponsor';
import NextFixture from '../components/NextFixture';

const Home = () => {
  return (
    <div>
      <Header />
      <CardContainer />
      <BannerSponsor />
      <VideoContainer />
      <BannerSupport />
      <NextFixture />
    </div>
  );
};

export default Home;
