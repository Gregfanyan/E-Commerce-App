import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
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
  case FETCH_USER_SUCCESS:
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
  default:
    return state
  }
}

export default UserReducer
