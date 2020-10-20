import Image from './shared/Image'

import { TileInterface } from '../interfaces'

export default function Tile(props: TileInterface) {
  return (
    <div className="md:w-1/3 w-full flex justify-center items-start">
      <div className="max-w-380 flex flex-wrap">
        <Image src={props.image} alt={props['image-alt']} />
        <div className="pt-2 text-center w-full">{props.author}</div>
      </div>
    </div>
  )
}
