// Material UI
import { AppBar, Grid, Paper, Toolbar, Typography } from '@material-ui/core'
import GlobalStyle from './themes/gloal'

// Components
import TodoList from './components/TodoList'
import AppBody from './components/common/AppBody'
import TodoForm from './components/TodoForm'

export default function App() {
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
              <TodoForm />
              <TodoList />
            </Grid>
          </Grid>
        </AppBody>
      </Paper>
    </>
  )
}
