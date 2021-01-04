import React from 'react';
import Match from '../components/match';
import fixtures from '../fixtures';

const NextFixture = () => {
  return fixtures.map((fixture) => (
    <Match key={fixture.id} fixture={fixture} />
  ));
};

export default NextFixture;
