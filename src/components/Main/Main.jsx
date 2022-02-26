import React from 'react';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  return (
    <>
      <Promo />
      <NavTab />
    <main className="main">
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
    </>
  );
}

export default Main;
