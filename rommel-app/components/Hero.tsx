import { HeroInterface } from '../interfaces'

export default function Hero(props: HeroInterface) {  
  return (
    <div className="flex items-start justify-center p-3 my-20 md:w-1/3 md:p-5">
      {props.title}
    </div>
  )
}
