import { Product } from './ProductType'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'
export const ADD_USER = 'ADD_PRODUCT'
export const REMOVE_USER = 'REMOVE_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const FETCH_LOGIN_FAILURE = 'FETCH_LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const GET_USERS = 'GET_USERS'

export type User = {
	user: {
		_id: string
		firstName: string
		lastName: string
		email: string
		cart: Product[]
		isAdmin: boolean
		resetLink: string
	}
	token: string
}

export type currentUser = {
	user: User
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
export type LoginUserSuccessAction = {
	type: typeof LOGIN_USER_SUCCESS
	payload: {
		user: User
	}
}

export type LogoutAction = {
	type: typeof LOGOUT
}

export type registerFailure = {
	type: typeof FETCH_USER_FAILURE
	payload: {
		user: User
	}
}

export type getUserList = {
	type: typeof GET_USERS
	payload: {
		users: User[]
	}
}

export type loginFailure = {
	type: typeof FETCH_LOGIN_FAILURE
	payload: {
		user: User
	}
}

export type fetchUserRequest = {
	type: typeof FETCH_USER_REQUEST
	loading: boolean
	payload: {
		user: User
	}
}

export type fetchUserSuccess = {
	type: typeof REGISTER_USER_SUCCESS
	payload: {
		user: User
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
	error: string | any
	user: User | any
	isAuthenticated: boolean
	users: User[] | any
	isValidated: boolean
	currentUser?: any
}

export type UserProps = {
	user: User
}

export type UserActions =
	| ReceiveUserAction
	| registerFailure
	| fetchUserSuccess
	| fetchUserRequest
	| AddUserAction
	| RemoveUserAction
	| LoginUserSuccessAction
	| loginFailure
	| LogoutAction
	| getUserList
