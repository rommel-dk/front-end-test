import Image from './shared/Image'

import { User } from '../interfaces'

type Props = {
  items: User[]
}

export default function Tile ({ props }: Props) {
  return (
    <div>
      <Image src={props.image} alt={props['image-alt']} />
    </div>
  )
}

