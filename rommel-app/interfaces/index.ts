export type TileInterface = {
  title: string
  image: string
  'image-alt': string
  date: string
  author: string
  'author-href'?: string
  type: string
  href: string
  appearances: AppearancesInterface
}

export type AppearancesInterface = {
  'inner-width'?: string
  'href-block'?: string
  'color-scheme': string
}
