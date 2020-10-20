import { ImageInterface } from '../interfaces'

const Image = ({ src, alt }: ImageInterface) => {
  const fileName = src.substring(src.lastIndexOf('/')+1);
  const fileNameNoExtension = fileName.replace(/\.[^/.]+$/, '')
  
  return (
    <picture>
      <source srcSet={`/images/${fileNameNoExtension}.webp`} type='image/webp' />
      <img src={`/images/${fileName}`} alt={alt} />
    </picture>
  )
}

export default Image
