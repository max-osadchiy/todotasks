import React from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/DeleteTodo'

const Todo = ({ onClick, completed, text, todoId }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <DeleteTodo todoId={todoId} />
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
