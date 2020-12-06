import { Paper, TextField } from '@material-ui/core'

import useInputState from '../hooks/useInputState'

export default function TodoForm({ addTodo }) {
  // State
  const [value, handleChange, reset] = useInputState('')

  function handleSumit(e) {
    e.preventDefault()
    addTodo(value)
    reset()
  }

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSumit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}
