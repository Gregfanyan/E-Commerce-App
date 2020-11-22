import { Product } from './ProductType'

export * from './ProductType'

export type HomeProps = {
	query: string
}

export type SearchProps = {
	search: string
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
	search: string
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleCatChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	category: string
}

export type CatProps = {
	product: Product[]
}
