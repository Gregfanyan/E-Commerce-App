import {
  FETCH_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  UserActions,
  UserState,
} from '../../types/UserType'

const initialState: UserState = {
  user: {},
  loading: false,
  error: '',
}

const UserReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
  case FETCH_USER_REQUEST:
    return {
      ...state,
      loading: true,
    }
  case REGISTER_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      users: action.payload,
      error: '',
    }
  case FETCH_USER_FAILURE:
    return {
      ...state,
      loading: false,
      users: [],
      error: action.payload,
    }
  case LOGIN_USER_SUCCESS:
    return {
      ...state,
      loading: false,
      user: action.payload,
      error: '',
    }
  default:
    return state
  }
}

export default UserReducer
