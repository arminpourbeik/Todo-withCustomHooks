import { Divider, List, Paper } from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'

import Todo from './Todo'

export default function TodoList({
  todos,
  removeTodo,
  toggleTodo,
  updateTodoTask,
}) {
  if (todos.length === 0) return null
  return (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <>
            <Todo
              key={todo.id}
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              updateTodoTask={updateTodoTask}
            />
            {index < todos.length - 1 && <Divider key={uuidv4()} />}
          </>
        ))}
      </List>
    </Paper>
  )
}
