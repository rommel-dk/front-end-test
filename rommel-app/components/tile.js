import Image from './shared/image'

export default function Tile ({ props }) {
  return (
    <div>
      <Image src={props.image} alt={props['image-alt']} />
    </div>
  )
}

