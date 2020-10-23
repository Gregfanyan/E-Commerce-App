import { Product } from './ProductType'

export * from './ProductType'

export type HomeProps = {
  query: string
}

export type TableRowProps = {
  flagUrl: string
  countryName: string
  languages: Object[]
  region: string
  population: number
}

export type SearchBarProps = {
  handleChange: React.ReactEventHandler<HTMLInputElement>
  search: string
}

export type MainTableProps = {
  products: string
}
