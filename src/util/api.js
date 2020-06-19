// package imports
import axios from 'axios'

// get base API url from environment (either "http://localhost:8000/" for dev or "" for hosted)
const baseApiUrl = process.env.REACT_APP_API_URL

// function to login/get tokens
export function login({ username, password }) {

  // post to backend Djoser endpoint to create access and refresh tokens
  return axios({
    method: 'post',
    url: `${baseApiUrl}auth/jwt/create/`,
    data: {
      username,
      password
    },
  })
    // // return tokens
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => { console.log(error) })
}

export function register({username, password}) {
    // post to backend Djoser endpoint to create access and refresh tokens
    return axios({
      method: 'post',
      url: `${baseApiUrl}auth/users/`,
      data: {
        username,
        password
      },
    })
}