import { v4 as uuidv4 } from 'uuid'

// Material UI
import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core'
import GlobalStyle from './themes/gloal'

// Components
import TodoList from './components/TodoList'
import AppBody from './components/common/AppBody'
import TodoForm from './components/TodoForm'
import useLocalStorageState from './hooks/useLocalStorageState'

export default function App() {
  // State
  const [todos, setTodos] = useLocalStorageState('todos', [])

  // Add Todo
  function addTodo(newTodoText) {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
  }

  // Remove Todo
  function removeTodo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id))
  }

  // Toggle Todo
  function toggleTodo(id) {
    setTodos(
      [...todos].map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Update Todo task
  function updateTodoTask(id, newTask) {
    setTodos(
      [...todos].map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    )
  }

  return (
    <>
      <GlobalStyle />
      <Paper>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography color='inherit'>TODOS WITH HOOKS</Typography>
          </Toolbar>
        </AppBar>
        <AppBody>
          <Grid container justify='center' style={{ marginTop: '1rem' }}>
            <Grid item xs={11} smd={8} lg={4}>
              <TodoForm addTodo={addTodo} />
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                updateTodoTask={updateTodoTask}
              />
            </Grid>
          </Grid>
        </AppBody>
      </Paper>
    </>
  )
}
