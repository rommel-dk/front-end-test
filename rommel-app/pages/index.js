import Tile from '../components/tile'
import data from '../public/data.json'

export default function HomePage () {
  return (
    <div>
      {data.tiles && data.tiles.map((tile, index) =>
        <Tile props={tile} key={index} />
      )}
    </div>
  )
}
