import axios from 'axios'
import { Dispatch } from "redux";

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
    Product
} from "../../types/ProductType"


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
    };
}
export const removeProduct = (product: Product): ProductActions => {
  return {
        type: REMOVE_PRODUCT,
        payload: {
            product,
        },
    };
}

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
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