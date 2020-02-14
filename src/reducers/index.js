import { combineReducers } from 'redux'
import todos from './todos'
import data from './data'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  data
})
