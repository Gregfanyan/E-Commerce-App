export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'
export const ADD_PRODUCT = 'ADD_PRODUCT'


export type Product = {
  _id: string
  name: string
  description: string
  categories: string[]
  variants: string[]
  sizes: number[]
  img: string
  price: number
}
export type ReceiveProductsAction = {
  type: typeof FETCH_PRODUCT_SUCCESS
  payload: {
    products: Product[]
  }
}

export type ProductActions =
  | ReceiveProductsAction
  | fetchProduct
  | fetchProductSuccess
  | fetchProductRequest

export type fetchProduct = {
  type: typeof FETCH_PRODUCT_FAILURE
  payload: {
    product: Product
  }
}

export type fetchProductRequest = {
  type: typeof FETCH_PRODUCT_REQUEST
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
