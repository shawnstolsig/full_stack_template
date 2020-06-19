// package imports
import React from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// project imports
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import { handleAutoLogin } from '../actions/auth'

function App({dispatch}) {

  // check for token to autologin
  React.useEffect(() => {
    console.log("autologin useEffect")
    dispatch(handleAutoLogin())
  }, [dispatch])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route render={()=><h1>404: Page Not Found</h1>} />
      </Switch>
    </Router>
  );
}

function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps)(App)
