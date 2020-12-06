import { useContext } from 'react'

import { TextField } from '@material-ui/core'

import useInputState from '../hooks/useInputState'

import { TodoContext } from '../context/todos.context'

export default function EditTodoForm({ id, task, toggle }) {
  // State
  const [value, handleChange] = useInputState(task)

  // Todo context
  const { updateTodoTask } = useContext(TodoContext)

  function handleSubmit(e) {
    e.preventDefault()
    updateTodoTask(id, value)
    toggle()
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', marginLeft: '1rem' }}>
      <TextField
        value={value}
        onChange={handleChange}
        autoFocus
        margin='normal'
        fullWidth
      />
    </form>
  )
}
