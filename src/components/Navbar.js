// package imports 
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const styles = {
  active: {
    fontWeight: 'bold'
  },
  link: {
    margin: 6
  }
}

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <NavLink exact to="/" activeStyle={styles.active} style={styles.link}>Home</NavLink>
      </div>
      <div>
        <NavLink exact to="/login" activeStyle={styles.active}  style={styles.link}>Login</NavLink>
      </div>
    </div>
  )
}


function mapStateToProps(state) {
  // minimize the amount of state sent to component by doing data manipulation here
  return {
    // return only the state you want this component to have
  }
}

export default connect(mapStateToProps)(Navbar);
