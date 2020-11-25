import { ProductState } from './ProductType'
import { UserState } from './UserType'

export type AppState = {
	products: ProductState
	user: UserState
}
