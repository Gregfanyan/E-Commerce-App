import { Product } from './ProductType'

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'
export const ADD_USER = 'ADD_PRODUCT'
export const REMOVE_USER = 'REMOVE_USER'

export type User = {
	id: string
	firstName: string
	lastName: string
	email: string
	cart: Product[]
	isAdmin: boolean
	resetLink: string
}

export type ReceiveUserAction = {
	type: typeof REGISTER_USER_SUCCESS
	payload: {
		users: User[]
	}
}

export type AddUserAction = {
	type: typeof ADD_USER
	payload: {
		user: User
	}
}

export type UserActions =
	| ReceiveUserAction
	| register
	| fetchUserSuccess
	| fetchUserRequest
	| AddUserAction
	| RemoveUserAction

export type register = {
	type: typeof REGISTER_USER_FAILURE
	payload: {
		user: User
	}
}

export type fetchUserRequest = {
	type: typeof REGISTER_USER_REQUEST
	loading: boolean
	payload: {
		user: User
	}
}

export type fetchUserSuccess = {
	type: typeof REGISTER_USER_SUCCESS
	payload: {
		product: Product
	}
}
export type RemoveUserAction = {
	type: typeof REMOVE_USER
	payload: {
		user: User
	}
}

export type UserState = {
	loading: boolean
	error: string
	user: User | any
}

export type AppState = {
	user: UserState
}
