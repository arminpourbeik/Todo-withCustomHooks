import { v4 as uuidv4 } from 'uuid'

// Action strings
import { ADD, REMOVE, TOGGLE, UPDATE } from './todos.actions'

function todoReducer(state, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        { id: uuidv4(), task: action.payload, completed: false },
      ]

    case REMOVE:
      return [...state].filter((todo) => todo.id !== action.payload)

    case TOGGLE:
      return [...state].map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )

    case UPDATE:
      return [...state].map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.newTask }
          : todo
      )

    default:
      return state
  }
}

export default todoReducer
