// package imports
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// project imports
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'

function App() {
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

export default App
