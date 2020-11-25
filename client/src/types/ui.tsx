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
	products: Product[]
}

export type handleItemClick = {
	event: KeyboardEvent
	name: any
}

export type CartItemProps = {
	cart: Product
}

export type ViewProductProps = {
	product: Product
}

export type HeaderProps = {
	search: any
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
	product: Product[]
	cat: string
}

export type HeaderSelect = {}

export type CatProps = {
	product: Product[]
}
