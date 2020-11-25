export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export type Product = {
	_id: string
	name: string
	description: string
	categories: [string]
	variants: string[]
	sizes: number[]
	img: string
	price: number
}
export type MainTableProps = {
	products: Product
}

export type ReceiveProductsAction = {
	type: typeof FETCH_PRODUCT_SUCCESS
	payload: {
		products: Product[]
	}
}

export type AddProductAction = {
	type: typeof ADD_PRODUCT
	payload: {
		product: Product
	}
}

export type ProductActions =
	| ReceiveProductsAction
	| fetchProduct
	| fetchProductSuccess
	| fetchProductRequest
	| AddProductAction
	| RemoveProductAction

export type fetchProduct = {
	type: typeof FETCH_PRODUCT_FAILURE
	payload: {
		product: Product
	}
}

export type fetchProductRequest = {
	type: typeof FETCH_PRODUCT_REQUEST
	loading: boolean
	payload: {
		product: Product
	}
}

export type fetchProductSuccess = {
	type: typeof FETCH_PRODUCT_SUCCESS
	payload: {
		product: Product
	}
}
export type RemoveProductAction = {
	type: typeof REMOVE_PRODUCT
	payload: {
		product: Product
	}
}

export type ProductState = {
	products: Product[]
	inCart: Product[]
	loading: boolean
	error: string
	counter: number
}

/* export type AppState = {
	products: ProductState
	filter: ''
} */
