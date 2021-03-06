import axios from 'axios'
import { Dispatch } from 'redux'

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CREATE_PRODUCT,
  BUY_PRODUCT,
  EDIT_PRODUCT,
  Product,
} from '../../types/ProductType'

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  }
}

export const fetchProductSuccess = (products: Product[]) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  }
}

export const CreateProduct = (product: Product): ProductActions => {
  return {
    type: CREATE_PRODUCT,
    payload: {
      product,
    },
  }
}

export const fetchProductFailure = (error: any) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  }
}

export const addProduct = (product: Product): ProductActions => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}
export const removeProduct = (product: Product): ProductActions => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

export const checkoutProduct = (product: Product): ProductActions => {
  return {
    type: BUY_PRODUCT,
    payload: {
      product,
    },
  }
}

export const editProduct = (product: Product): ProductActions => {
  return {
    type: EDIT_PRODUCT,
    payload: {
      product,
    },
  }
}

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProductRequest())
    axios
      .get('/api/v1/products')
      .then((response) => {
        const products = response.data
        dispatch(fetchProductSuccess(products))
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message))
      })
  }
}

export const CreateNewProduct = (product: Product) => {
  return (dispatch: Dispatch, getState: any) => {
    dispatch(fetchProductRequest())
    axios
      .post(
        'http://localhost:8000/api/v1/products',
        product,
        tokenConfig(getState)
      )
      .then((response) => {
        const products = response.data
        dispatch(CreateProduct(products))
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message))
      })
  }
}

export const checkout = (productId: string, userId: string) => {
  return (dispatch: Dispatch, getState: any) => {
    dispatch(fetchProductRequest())
    axios
      .patch(
        `http://localhost:8000/api/v1/user/inCart/${userId}`,
        { id: productId },
        tokenConfig(getState)
      )
      .then((response) => {
        const product = response.data
        dispatch(checkoutProduct(product))
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message))
      })
  }
}

export const update = (product: Product, productId: string) => {
  return (dispatch: Dispatch, getState: any) => {
    dispatch(fetchProductRequest())
    axios
      .put(
        `http://localhost:8000/api/v1/products/${productId}`,
        product,
        tokenConfig(getState)
      )
      .then((response) => {
        dispatch(editProduct(response.data))
        window.location.href = '/home'
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message))
      })
  }
}

export const tokenConfig = (getState: any) => {
  const token = getState().user.user.user.token
  const config = {
    headers: {
      'Content-type': 'application/json',
      auth_token: '',
    },
  }
  if (token) {
    config.headers['auth_token'] = token
  }
  return config
}
