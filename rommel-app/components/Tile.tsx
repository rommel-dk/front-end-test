import Image from './shared/Image'

import { TileInterface } from '../interfaces'

export default function Tile(props: TileInterface) {

  // Ideally date should be fetched in either
  // correct format or as a timestamp
  const getDate = (date: string) => {
    return date.replace(/(\d+)[^.]/, '$1. ');
  }

  const colorSchemeClass = props.appearances['color-scheme'] ? 'color-scheme-' + props.appearances['color-scheme'] : ''

  return (
    <div className="flex items-start justify-center p-3 my-20 md:w-1/3 md:p-5">
      <div className={'relative flex flex-wrap max-w-380 ' + colorSchemeClass}>
        {props.image &&
          <div className="mb-3">
            <Image src={props.image} alt={props['image-alt']} />
          </div>
        }
        {props.type && props.date && 
          <div className="absolute top-0 right-0 p-3 mt-5 font-semibold bg-white">{props.type} {getDate(props.date)}</div>
        }
        <div className="text-3xl">
          {props.author && props['author-href'] &&
            <a href={props['author-href']} className="font-semibold text-pink">{props.author}</a>
          }
          {props.author && !props['author-href'] &&
            <div className="font-semibold text-pink">{props.author}</div>
          }
          {props.title &&
            <h2 className="w-full text-3xl font-semibold text-black">{props.title}</h2>
          }
          {props.href &&
            <div className="my-5 arrow arrow-right"></div>
          }
        </div>
      </div>
    </div>
  )
}
