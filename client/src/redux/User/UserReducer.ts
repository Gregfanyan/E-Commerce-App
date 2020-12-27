import {
  FETCH_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  FETCH_LOGIN_FAILURE,
  UserActions,
  UserState,
  LOGOUT,
  GET_USERS,
} from '../../types/UserType'

const initialState: UserState = {
  user: {},
  users: [],
  loading: false,
  error: '',
  isAuthenticated: false,
  isValidated: false,
}

const UserReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
  case FETCH_USER_REQUEST:
    return {
      ...state,
      loading: true,
      isAuthenticated: false,
    }
  case REGISTER_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      user: action.payload,
      isValidated: true,
      error: '',
    }
  case FETCH_USER_FAILURE:
    return {
      ...state,
      loading: false,
      user: [],
      error: action.payload,
      isAuthenticated: false,
    }

  case FETCH_LOGIN_FAILURE:
    return {
      ...state,
      loading: false,
      user: [],
      error: action.payload,
      isAuthenticated: false,
    }
  case LOGIN_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      user: action.payload,
      isAuthenticated: true,
      error: '',
    }
  case LOGOUT:
    return {
      ...state,
      isAuthenticated: false,
      user: null,
      users: [],
    }
  case GET_USERS:
    return {
      ...state,
      loading: false,
      users: action.payload,
      isAuthenticated: true,
      error: '',
    }

  default:
    return state
  }
}

export default UserReducer
