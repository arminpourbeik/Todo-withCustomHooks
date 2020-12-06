import { createContext } from 'react'

import todoReducer from './todos.reducer'
import { ADD, REMOVE, TOGGLE, UPDATE } from './todos.actions'

import useLocalStorageReducer from '../hooks/useLocalStorageReducer'

export const TodoContext = createContext()

export default function TodoProvider({ children }) {
  const [todos, dispatch] = useLocalStorageReducer('todos', todoReducer)

  // Add Todo
  function addTodo(newTodoText) {
    dispatch({ type: ADD, payload: newTodoText })
  }

  // Remove Todo
  function removeTodo(id) {
    dispatch({ type: REMOVE, payload: id })
  }

  // Toggle Todo
  function toggleTodo(id) {
    dispatch({ type: TOGGLE, payload: id })
  }

  // Update Todo task
  function updateTodoTask(id, newTask) {
    dispatch({ type: UPDATE, payload: { id, newTask } })
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, updateTodoTask }}
    >
      {children}
    </TodoContext.Provider>
  )
}
