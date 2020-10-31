import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  ProductActions,
  ADD_PRODUCT,
  
} from "../../types/ProductType"

const initialState = {
  loading: false,
  products: [],
  inCart: [],
  error: '',
}

console.log(initialState.products)

const ProductReducers = (state = initialState, action:ProductActions) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: '',
      }
    case FETCH_PRODUCT_FAILURE:
      return {
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
