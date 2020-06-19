import { LOGIN_USER, LOGOUT_USER } from '../actions/auth'

export default function authReducer(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { 
        id: action.id,
        username: action.username,
      }
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}