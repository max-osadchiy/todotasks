import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <h1 className="center">My Tasks</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
