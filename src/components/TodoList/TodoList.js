import React from 'react'
import { arrayOf, shape, number, bool, string, func } from 'prop-types'
import Todo from '../Todo/Todo'

import './TodoList.scss'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        {...todo}
        key={todo.id}
        todoId={todo.id}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: arrayOf(shape({
    id: number.isRequired,
    completed: bool.isRequired,
    text: string.isRequired
  }).isRequired).isRequired,
  toggleTodo: func.isRequired
}

export default TodoList
