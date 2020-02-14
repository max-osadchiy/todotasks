import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Information from './Information/Information'

import './App.scss'

const App = () => (
  <div className="container">
    <h1 className="center">My Tasks</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Information/>
  </div>
)

export default App
