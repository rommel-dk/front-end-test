import React from 'react';

import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Hero1 from './components/Hero1';
import Tiles from './components/Tiles';
import Section from './components/Section';
import Hero2 from './components/Hero2';

function App() {
   return (
      <div className='App'>
         <Hero1 />
         <Tiles />
         <Hero2 />
         <Banner />
         <Section />
         <Footer />
      </div>
   );
}

export default App;
