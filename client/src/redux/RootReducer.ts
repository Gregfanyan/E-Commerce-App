import { combineReducers } from 'redux'
import carReducer from './Car/CarReducer'
import ProductReducer from "./Products/ProductReducer"

const rootReducer = combineReducers({
     car: carReducer,
    products: ProductReducer
})

export default rootReducer