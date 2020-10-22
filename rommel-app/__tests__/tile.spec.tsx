import * as React from 'react'
import {shallow} from 'enzyme'
import Tile from '../components/Tile'

describe('Components', () => {
  describe('Tile', () => {
    let tile = {
      "title": "I Imagined that Things Were Speaking",
      "image": "https://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/images/tiles-image-1.jpg",
      "image-alt": "I Imagined that Things Were Speaking",
      "date": "29 August 2019",
      "author": "Jams Bonham",
      "author-href": "#",
      "type": "Project",
      "href": "#",
      "appearances": {
        "color-scheme": "alt"
      }
    }
    it('should convert date to expected format', function () {
      const wrap = shallow(
        <Tile
            title={tile.title}
            image={tile.image}
            image-alt={tile['image-alt']}
            date={tile.date}
            author={tile.author}
            author-href={tile['author-href']}
            type={tile.type}
            href={tile.href}
            appearances={tile.appearances}
        />
      )
      expect(wrap.find('div.absolute').text()).toBe('Project 29. August 2019')
    })
  })  
})