import axios from 'axios'
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from './ProductTypes'

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  }
}

export const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  }
}

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  }
}

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest())
    axios
      .get('http://localhost:8000/api/v1/products')
      .then((response) => {
        const products = response.data

        dispatch(fetchProductSuccess(products))
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.message))
      })
  }
}
