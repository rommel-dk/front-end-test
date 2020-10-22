import Image from './shared/Image'

import { TileInterface } from '../interfaces'

export default function Tile(props: TileInterface) {

  // Ideally date should be fetched in either
  // correct format or as a timestamp
  const getDate = (date: string) => {
    return date.replace(/(\d+)[^.]/, '$1. ');
  }

  return (
    <div className="flex items-start justify-center my-20 md:w-1/3">
      <div className="relative flex flex-wrap p-3 max-w-380 md:p-5">
        <Image src={props.image} alt={props['image-alt']} />
        <div className="absolute top-0 right-0 py-3 pl-3 pr-6 mt-10 font-semibold bg-white">{props.type} {getDate(props.date)}</div>
        <div className="text-3xl">
          <div className="pt-3 font-semibold text-pink">{props.author}</div>
          <h2 className="w-full text-3xl font-semibold text-black">{props.title}</h2>
          <div className="mt-5 arrow arrow-right"></div>
        </div>
      </div>
    </div>
  )
}
