import Image from './shared/Image'

import { TileInterface } from '../interfaces'

export default function Tile(props: TileInterface) {
  return (
    <div>
      <Image src={props.image} alt={props['image-alt']} />
      <div className="pt-2 text-center">{props.author}</div>
      <div className="pt-2">{props.author}</div>
    </div>
  )
}
