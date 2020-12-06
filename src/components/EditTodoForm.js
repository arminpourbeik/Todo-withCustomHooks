import { TextField } from '@material-ui/core'

import useInputState from '../hooks/useInputState'

export default function EditTodoForm({ id, task, updateTodoTask, toggle }) {
  // State
  const [value, handleChange] = useInputState(task)

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
