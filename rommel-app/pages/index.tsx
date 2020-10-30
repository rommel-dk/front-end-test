import Head from 'next/head'
import { GetStaticProps } from 'next'
import Tile from '../components/Tile'

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
      {/* Tiles */}
      <div className='md:flex md:flex-wrap'>
        {data.tiles && data.tiles.map((tile, index) =>
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
            key={index}
          />
        )}
      </div>
    </div>
  )
}
