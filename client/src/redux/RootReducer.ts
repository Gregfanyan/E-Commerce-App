import { combineReducers } from 'redux'
import ProductReducer from './Products/ProductReducer'
import UserReducer from './User/UserReducer'

const rootReducer = combineReducers({
  products: ProductReducer,
  user: UserReducer,
})

export default rootReducer
