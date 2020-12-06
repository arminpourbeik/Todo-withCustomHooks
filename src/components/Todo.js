import { useContext, memo } from 'react'

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

import { TodoContext } from '../context/todos.context'

const StyledListItemText = styled(ListItemText)`
  ${(p) =>
    p.completed === 'true' &&
    css`
      text-decoration: line-through;
    `}
`

function Todo({ id, task, completed }) {
  // Edit state
  const [isEditing, toggle] = useToggle(false)

  // Todo context
  const { removeTodo, toggleTodo } = useContext(TodoContext)

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggle={toggle} />
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

export default memo(Todo)
