import React, { useEffect, useState } from 'react';

import Hero1 from './components/Hero1';
import Titles, { TitleCard, ITitleCardProps } from './components/Title';
import Hero2 from './components/Hero2';
import Banner from './components/Banner';
import ImageWide from './components/ImageWide';
import ImageText from './components/ImageText';
import Footer from './components/Footer';
import {ReactComponent as Logo} from './svgs/logo.svg';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tiles, setTiles] = useState<ITitleCardProps[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const res = await fetch('https://raw.githubusercontent.com/benada002/front-end-test/master/assignment-assets/data.json');
      const {tiles: jsonRes} = await res.json();

      setTiles(jsonRes);
      setIsLoading(false);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Hero1 title="Master the front-end with finesse">
        The assignment is supposed to be executed as simple as possible. Code the template in HTML/CSS and try to avoid 3. party frameworks as much as possible. Creating the page with React components will grant extra megamate bonus points.
      </Hero1>
      <Titles screenWidthCols={{
        1200: 3,
        750: 2
      }}>
        {isLoading && 'Loading...'}
        {(!isLoading && tiles.length === 0) && 'Sorry, nothing found.'}
        {(tiles.length > 0 ) &&
          // @ts-ignore
          tiles.map(({appearances, ...titleProps}, i) => <TitleCard key={i} {...titleProps}></TitleCard>)
        }
      </Titles>
      <Hero2 title="Your Chance" subtitle="GET ON THE SKILL TRAIN NOW">
        The assignment must be delivered as a pull request to the assignment repository and we appreciate running commits so we can see how you go from our small layout to a final awesome product.
      </Hero2>
      <Banner
        image={{
          src: "https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/images/banner.jpg",
          alt: "This banner is for real"
        }}
        title="Red Arrows"
        subtitle="#extra"
        author="Pil Damgaard"
        year="2018"
        description="This section is actually a little extra that can be added if you feel confident while working and the time aint sprinting."
      />
      <ImageWide
        src="https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/images/image-full-width.png"
        alt="Find us at the center of the universe"
      />
      <ImageText
        src="https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/images/text-media-right.png"
        alt="Find us at the center of the universe"
      >
        We use tools like NPM/Gulp/Webpack to preprocess files and PostCSS for some mean, lean, killing machine code and React JS is taking over WordPress one step at a time.
      </ImageText>
      <Footer
        title="Pull request"
        subtitle="Don't be shy to commit"
        Logo={Logo}
        href="https://github.com/rommel-dk/front-end-test/compare"
      />
    </div>
  );
}

export default App;
