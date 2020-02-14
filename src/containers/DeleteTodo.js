import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

const DeleteTodo = ({ dispatch, todoId }) => 
<button type="submit" style={{ marginLeft: '4px' }} onClick={() => dispatch(deleteTodo(todoId))} className="waves-effect waves-light btn red">Delete</button>

export default connect()(DeleteTodo)