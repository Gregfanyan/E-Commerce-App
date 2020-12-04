import axios from 'axios'
import { Dispatch } from 'redux'

import {
  FETCH_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UserActions,
  REMOVE_USER,
  User,
  LOGIN_USER_SUCCESS,
  FETCH_LOGIN_FAILURE,
  LOGOUT,
} from '../../types/UserType'

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  }
}

export const fetchUserSuccess = (users: User[]) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error: UserActions) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  }
}

export const fetchLoginFailure = (error: UserActions) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  }
}

export function logout(): UserActions {
  return {
    type: LOGOUT,
  }
}

export const removeUser = (user: User): UserActions => {
  return {
    type: REMOVE_USER,
    payload: {
      user,
    },
  }
}

export function loginSuccess(user: User): UserActions {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      user,
    },
  }
}

export const UserRegister = ({ firstName, lastName, email, password }: any) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUserRequest())
    axios
      .post('http://localhost:8000/api/v1/user', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        const users = response.data
        dispatch(fetchUserSuccess(users))
        window.location.href = '/login'
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const login = ({ email, password, firstName }: any) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUserRequest())
    const user = { email, password, firstName }

    axios
      .post('http://localhost:8000/api/v1/user/logIn', user)
      .then((response) => {
        dispatch(loginSuccess(response.data))
        localStorage.setItem('user', JSON.stringify(response.data.user))
        window.location.href = '/Home'
      })
      .catch((error) => {
        dispatch(fetchLoginFailure(error.message))
      })
  }
}
