import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ProductActions,
  ADD_PRODUCT,
  ProductState,
  REMOVE_PRODUCT,
  CREATE_PRODUCT,
  EDIT_PRODUCT,
} from '../../types/ProductType'

const initialState: ProductState = {
  loading: false,
  products: [],
  inCart: [],
  error: '',
  counter: 0,
  isValidated: false,
}

const ProductReducers = (state = initialState, action: ProductActions) => {
  switch (action.type) {
  case FETCH_PRODUCT_REQUEST:
    return {
      ...state,
      loading: true,
    }
  case FETCH_PRODUCT_SUCCESS:
    return {
      ...state,
      loading: false,
      products: action.payload,
      error: '',
    }
  case FETCH_PRODUCT_FAILURE:
    return {
      ...state,
      loading: false,
      products: [],
      error: action.payload,
    }
  case ADD_PRODUCT: {
    const { product } = action.payload
    if (state.inCart.find((p) => p.name === product.name)) {
      return state
    }
    return {
      ...state,
      inCart: [...state.inCart, product],
      counter: state.counter + 1,
    }
  }
  case REMOVE_PRODUCT: {
    const { product } = action.payload
    const index = state.inCart.findIndex((p) => p.name === product.name)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return {
        ...state,
        inCart: [...state.inCart],
        counter: state.counter - 1,
      }
    }
    return state
  }
  case CREATE_PRODUCT: {
    return {
      ...state,
      loading: false,
      product: action.payload,
      isValidated: true,
      error: '',
    }
  }
  case EDIT_PRODUCT: {
    return {
      ...state,
      loading: false,
      product: action.payload,
      isAuthenticated: true,
      error: '',
    }
  }
  default:
    return state
  }
}

export default ProductReducers
