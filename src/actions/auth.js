// project imports
import { login } from '../util/api'
import jwt_decode from 'jwt-decode'

// action types
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

// action creators
function loginUser(id, username, expiresAt, accessToken, refreshToken){
    return {
        type: LOGIN_USER,
        id,
        username,
        expiresAt,
        accessToken,
        refreshToken,
    }
}

function logoutUser(){
    return {
        type: LOGOUT_USER
    }
}

// handle login (get tokens from backend, decode, put in localStorage and store)
export function handleLoginUser({username, password}){
    return (dispatch) => {

        // login() will return promise for access token and refresh token if resolved
        login({username, password})
        .then(({data}) => {
            
            const { access, refresh } = data

            // decode access token to get username, expiration, id
            const decoded = jwt_decode(access)

            // dispatch action to store values in state, indicating user is logged in successfully
            dispatch(loginUser(decoded.user_id, username, decoded.exp, access, refresh))

            // store tokens in localStorage for autologin
            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshToken', refresh)

            // redirect??
        })
        .catch((res) => {
            alert("Error logging in.")
            console.error(res)
        })
    }
}

export function handleLogoutUser(){
    return (dispatch) => {

        // set authedUser to null
        dispatch(logoutUser())

        // delete tokens from local storage
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }
}

// auto login?
// auto logout?