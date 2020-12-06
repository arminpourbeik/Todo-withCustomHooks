import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core'

import styled, { css } from 'styled-components'
import useToggle from '../hooks/useToggle'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import EditTodoForm from './EditTodoForm'

const StyledListItemText = styled(ListItemText)`
  ${(p) =>
    p.completed === 'true' &&
    css`
      text-decoration: line-through;
    `}
`

export default function Todo({
  id,
  task,
  completed,
  removeTodo,
  toggleTodo,
  updateTodoTask,
}) {
  // Edit state
  const [isEditing, toggle] = useToggle(false)

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          updateTodoTask={updateTodoTask}
          toggle={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onChange={() => toggleTodo(id)}
          />
          <StyledListItemText completed={completed ? 'true' : 'false'}>
            {task}
          </StyledListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label='delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}
