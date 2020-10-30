import { HeroInterface } from '../interfaces'

<<<<<<< HEAD
export default function Hero(props: HeroInterface) {  
=======
export default function Hero(props: HeroInterface) {

  // const getTitleWithMarkup = (title: string) => {
  //   return title.replace(/(\d+)[^.]/, '$1. ')
  // }
  
>>>>>>> 4afb2bb91c083b03e7bc8c21ea4e67c00770a2be
  return (
    <div className="flex items-start justify-center p-3 my-20 md:w-1/3 md:p-5">
      {props.title}
    </div>
  )
}
