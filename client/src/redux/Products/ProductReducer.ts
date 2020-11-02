import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ProductActions,
  ADD_PRODUCT,
  ProductState,
Product
} from "../../types/ProductType"

const initialState: ProductState = {
  loading: false,
  products: [],
  inCart: [] ,
  error: '',
}

const ProductReducers = (state = initialState, action:ProductActions) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PRODUCT_SUCCESS:
console.log("3", action.payload)
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
      const { product } = action.payload;
      if (state.inCart.find((p:any) => p.name === product.name)) {
        return state;
            }
      return { ...state, inCart: [...state.inCart, product] };
    }    
      
    default:
      return state
  }
}

export default ProductReducers
