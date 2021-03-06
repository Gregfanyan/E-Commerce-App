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
  GOOGLE_LOGIN,
  GET_USER_WITH_ITEMS_POPULATE,
} from '../../types/UserType'

const initialState: UserState = {
  currentUser: [],
  user: [],
  users: [],
  loading: false,
  error: '',
  isAuthenticated: false,
  isValidated: false,
  isGoogleUser: false,
  userwithItemsPopulated: [],
}

const UserReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
  case FETCH_USER_REQUEST:
    return {
      ...state,
      loading: true,
      /* isAuthenticated: false, */
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
      currentUser: action.payload.user.user,
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
  case GOOGLE_LOGIN:
    return {
      ...state,
      loading: false,
      isAuthenticated: true,
      isGoogleUser: true,
      error: '',
    }
  case GET_USER_WITH_ITEMS_POPULATE:
    return {
      ...state,
      loading: false,
      userwithItemsPopulated: action.payload.user,
      isAuthenticated: true,
      error: '',
    }
  default:
    return state
  }
}

export default UserReducer
