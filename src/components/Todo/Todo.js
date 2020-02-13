import React from 'react'
import { func, bool, string } from 'prop-types'
import DeleteTodo from '../../containers/DeleteTodo'

import './Todo.scss'

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
  onClick: func.isRequired,
  completed: bool.isRequired,
  text: string.isRequired,
  todoId: func.isRequired
}

export default Todo
