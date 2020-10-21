import Image from './shared/Image'

import { TileInterface } from '../interfaces'

export default function Tile(props: TileInterface) {
  return (
    <div className="md:w-1/3 w-full flex sm:justify-center items-start">
      <div className="max-w-380 flex flex-wrap">
        <Image src={props.image} alt={props['image-alt']} />
        <div className="sm:text-center md:text-left text-3xl">
          <div className="pt-4 text-pink font-semibold">{props.author}</div>
          <h2 className=" w-full text-black text-3xl">{props.title}</h2>
        </div>
      </div>
    </div>
  )
}
