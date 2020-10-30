import { HeroInterface } from '../interfaces'

export default function Hero(props: HeroInterface) {

  // const getTitleWithMarkup = (title: string) => {
  //   return title.replace(/(\d+)[^.]/, '$1. ')
  // }
  
  return (
    <div className="flex items-start justify-center p-3 my-20 md:w-1/3 md:p-5">
      {props.title}
    </div>
  )
}
