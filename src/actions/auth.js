// project imports
import { login, getUserFromToken, refreshToken } from '../util/api'
import jwt_decode from 'jwt-decode'

// action types
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

// action creators
function loginUser(id, username, expiresAt, access, refresh) {
  return {
    type: LOGIN_USER,
    id,
    username,
    expiresAt,
    access,
    refresh,
  }
}

function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

// helper for decoding JWT.  
// takes in tokens together in an object, returns decoded user_id and expiration time
function helperJWT(access, refresh) {
  const decoded = jwt_decode(access)
  return {
    userId: decoded.user_id,
    expiresAt: decoded.exp
  }
}

// handle login (get tokens from backend, decode, put in localStorage and store)
export function handleLoginUser({ username, password }, history) {
  return (dispatch) => {

    // login() will return promise for access token and refresh token if resolved
    login({ username, password })
      .then(({ data }) => {

        // get tokens
        const { access, refresh } = data

        // decode access token to get username, expiration, id
        const { userId, expiresAt } = helperJWT(access, refresh)

        // dispatch action to store values in state, indicating user is logged in successfully
        dispatch(loginUser(userId, username, expiresAt, access, refresh))

        // store tokens in localStorage for autologin
        localStorage.setItem('access', access)
        localStorage.setItem('refresh', refresh)

        // redirect??
        history.push('/')
      })
      .catch((res) => {
        alert("Error logging in.")
        console.error(res)
      })
  }
}

export function handleLogoutUser() {
  return (dispatch) => {
    // set authedUser to null
    dispatch(logoutUser())

    // delete tokens from local storage
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
  }
}

export function handleAutoLogin() {
  return (dispatch) => {
    // get tokens from local storage
    let access = localStorage.getItem('access')
    let refresh = localStorage.getItem('refresh')

    if (access && refresh) {
      // decode tokens
      const { userId, expiresAt } = helperJWT(access, refresh)

      // only login if token isn't expired, or won't expire in specified buffer time
      const bufferTimeInMin = 10
      if (expiresAt - Date.now() / 1000 > bufferTimeInMin * 60) {

        // maybe update the access token with the refresh token?

        // get username from backend
        getUserFromToken(access)
          .then(({ data }) => {

            // extract username from API response
            const { username } = data

            // login user
            dispatch(loginUser(userId, username, expiresAt, access, refresh))

          })
          .catch(() => {
            alert("Error getting user details for autologin.  Please login manually.")
          })
      }
      // remove tokens from localStorage since they have expired
      else {
        // delete tokens from local storage
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
      }
    }
  }
}

// auto logout?