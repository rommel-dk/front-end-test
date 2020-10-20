import Image from "./shared/Image"

import { TileInterface } from '../interfaces'

export default function Tile(props: TileInterface) {
  return (
    <div>
      <Image src={props.image} alt={props['image-alt']} />
    </div>
  );
}
