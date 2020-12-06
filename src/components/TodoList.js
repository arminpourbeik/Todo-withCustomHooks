import { useContext } from 'react'
import { Divider, List, Paper } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'

import Todo from './Todo'

import { TodoContext } from '../context/todos.context'

export default function TodoList() {
  // Todo Context
  const { todos } = useContext(TodoContext)

  if (todos.length === 0) return null
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <Todo key={todo.id} {...todo} />
            {index < todos.length - 1 && <Divider key={uuidv4()} />}
          </>
        ))}
      </List>
    </Paper>
  )
}
