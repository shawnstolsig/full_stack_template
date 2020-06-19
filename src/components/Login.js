// package imports
import React from 'react'
import { connect } from 'react-redux'

// project imports
import { handleLoginUser } from '../actions/auth'

function Login({dispatch, history}) {

  // state for holding login credentials
  const [ username, setUsername ] = React.useState('')
  const [ password, setPassword ] = React.useState('')

  const handleSubmit = (event) => {
    
    // prevent page from reloading
    event.preventDefault()

    // dispatch action to store
    dispatch(handleLoginUser({
      username, 
      password,
    }, history))

  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username"
        value={username} 
        placeholder="Username..." 
        onChange={(event) => setUsername(event.target.value)}
      />
      <input 
        type="text" 
        name="password" 
        value={password} 
        placeholder="Password..."
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

function mapStateToProps(){
    return {

    }
}

export default connect(mapStateToProps)(Login)