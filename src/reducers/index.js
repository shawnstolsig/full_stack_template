import { combineReducers } from 'redux'

// import topicReducer from '../reducers/topic'
import authReducer from './auth'

export default combineReducers({
  // topic: topicReducer, 
  authedUser: authReducer,
  
})