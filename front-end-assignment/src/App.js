import React from 'react';
import ArrowRD from './components/arrow/arrowRD';
import Articles from './components/articles/articles';
import ExtraBanner from './components/extrabanner/extraBanner';
import LandingHero from './components/landingHeroComponent/LandingHero';
import SecondHero from './components/secondHero/SecondHero';

function App() {
  return (
    <div className="App">
      <LandingHero />
      <ArrowRD />
      <Articles />
      <SecondHero />
      <ExtraBanner />

    </div>
  );
}

export default App;
