import React from 'react';
import Match from '../components/match';
import fixtures from '../fixtures';

// const NextFixture = () => {
//   return fixtures.map((fixture) => (
//     <Match key={fixture.id} fixture={fixture} />
//   ));
// };

const NextFixture = () => {
  let d = Date();
  let a = d.toString();

  // if (a < fixtures.date) {
  //   console.log(fixtures[0].date);
  // }

  fixtures.sort();
  console.log(fixtures[0]);

  // console.log(fixtures[5].date);

  return <Match />;
};

export default NextFixture;
