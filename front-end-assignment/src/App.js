import React from 'react';
import ArrowRD from './components/arrow/arrowRD';
import Articles from './components/articles/articles';
import ExtraBanner from './components/extrabanner/extraBanner';
import ImageWide from './components/imageWide/imageWide';
import LandingHero from './components/landingHeroComponent/LandingHero';
import SecondHero from './components/secondHero/SecondHero';
import ImageText from './components/imageText/imageText';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <LandingHero />
      <ArrowRD />
      <Articles />
      <SecondHero />
      <ExtraBanner />
      {/* <ImageWide /> */}
      <ImageText />
      <Footer />

    </div>
  );
}

export default App;
