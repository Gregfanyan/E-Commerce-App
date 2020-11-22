import axios from 'axios'
import { Dispatch } from 'redux'

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UserActions,
  REMOVE_USER,
  User,
} from '../../types/UserType'

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  }
}

export const fetchUserSuccess = (users: User[]) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  }
}

export const fetchUserFailure = (error: any) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
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

export const register = ({ firstName, lastName, email, password }: any) => {
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
        window.location.href = '/Home'
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message))
      })
  }
}
