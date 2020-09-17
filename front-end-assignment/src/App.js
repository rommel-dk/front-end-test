import React from 'react';
import ArrowRD from './components/arrow/arrowRD';
import Articles from './components/articles/articles';
import LandingHero from './components/landingHeroComponent/LandingHero';
import SecondHero from './components/secondHero/SecondHero';

function App() {
  return (
    <div className="App">
      <LandingHero />
      <ArrowRD />
      <Articles />
      <SecondHero />
      {/* Gallery */}
      {/* Banner */}

    </div>
  );
}

export default App;
