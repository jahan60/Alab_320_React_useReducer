import { useState } from 'react'
import { useReducer } from 'react'
import { todoReducer, initialState } from './components/todoReducer'
import './App.css'

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return(
    <div className ="app">
      <h1>Todo List</h1>

      <TodoForm dispatch={dispatch} />
      <TodoList todos={ todos} dispatch={dispatch} />
    </div>
  )
}
export default App
