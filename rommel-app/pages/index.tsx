import Tile from '../components/Tile'
import data from '../public/data.json'

export default function HomePage () {
  return (
    <div>
      {data.tiles && data.tiles.map((tile, index) =>
        <Tile image={tile.image}
              image-alt={tile['image-alt']}
              key={index} />
      )}
    </div>
  )
}
