import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
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
  case REGISTER_USER_REQUEST:
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
  case REGISTER_USER_FAILURE:
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
