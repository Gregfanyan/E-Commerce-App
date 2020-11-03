import { string } from 'yup'
import { Product } from './ProductType'

export * from './ProductType'

export type HomeProps = {
  query: string
}
export type searchProps = 'string'

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

export type handleItemClick = {
  event: KeyboardEvent
  name: any
}

export type CartItemProps = {
  cart: any
}
