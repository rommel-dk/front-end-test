import Tile from '../components/Tile'
import data from '../public/data.json'

export default function HomePage () {
  return (
    <div className='md:flex md:flex-wrap p-5 md:p-20'>
      {data.tiles && data.tiles.map((tile, index) =>
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
          key={index}
        />
      )}
    </div>
  )
}
