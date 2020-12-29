import React from 'react';
// import components
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import BannerSupport from '../components/BannerSupport';
import VideoContainer from '../components/VideoContainer';
import BannerSponsor from '../components/BannerSponsor';
import NextFixture from '../components/NextFixture';
import Fixtures from '../components/Fixtures';
import SponsorContainer from '../components/SponsorContainer';

const Home = () => {
  return (
    <div>
      <Header />
      <CardContainer />
      <BannerSponsor />
      <VideoContainer />
      <BannerSupport />
      <NextFixture />
      <Fixtures />
      <SponsorContainer />
    </div>
  );
};

export default Home;
