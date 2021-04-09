import { Product } from './ProductType'
export * from './ProductType'

export type HomeProps = {
	data: Product[]
	cat: string
	search: string
}
export type CartItemProps = {
	cart: any
}

export type CategoryProps = {
	handleSelect: React.ChangeEvent<HTMLInputElement> | any
	cat: string
}

export type updateProps = {
	product: Product[] | any
}

export type idProps = {
	id: string
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
	products: Product[] | any
	currentProduct: Product[] | any
	currentPage: Product[] | any
	productPerPage: number
	paginate: Function
}

export type PaginationProps = {
	totalProducts: any
	productPerPage: number
	paginate: Function
}

export type mediaQueryProps = {
	isTabletOrMobile: boolean
}

export type handleItemClick = {
	event: KeyboardEvent
	name: any
}

export type ViewProductProps = {
	product: Product
}

export type NavbarProps = {
	handleSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void
	cat: string
	isTabletOrMobile: boolean
	children:any
}

export type SelectionProps = {
	handleSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void
	cat: string
}

export type HeaderSelect = {}

export type CatProps = {
	product: Product[]
}

export type isTabletOrMobileProps = {
	isTabletOrMobile: boolean
}

export type MobileNavbarProps = {
	isTabletOrMobile: boolean
	children: any
}

export type HeaderPageProps = {
	search: string
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
