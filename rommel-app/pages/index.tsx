import Head from 'next/head'
import { GetStaticProps } from 'next'
import Hero from '../components/Hero'
import Tile from '../components/Tile'
import { TileInterface } from '../interfaces'

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const res = await fetch('http://raw.githubusercontent.com/rommel-dk/front-end-test/master/assignment-assets/data.json')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function HomePage ({ data }: { data: any}): JSX.Element {  
  return (
    <div className="mx-auto container-xl">
      <Head>
        <title>Assignment</title>
        <link rel="icon" href="/images/logo/logo.svg" />
      </Head>
      <Hero
        title={data['hero-1'].title}
        description={data['hero-1'].description}
        href={data['hero-1'].href}
        appearances={data['hero-1'].appearances}
      />
      {/* Tiles md:flex md:flex-wrap */}
      <div className='grid gap-2 md:gap-4 md:grid-cols-3'>
        {data.tiles && data.tiles.map((tile:TileInterface) =>
          <Tile
            title={tile.title}
            image={tile.image}
            image-alt={tile['image-alt']}
            date={tile.date}
            author={tile.author}
            author-href={tile['author-href']}
            type={tile.type}
            href={tile.href}
            appearances={tile.appearances}
          />
        )}
      </div>
    </div>
  )
}
