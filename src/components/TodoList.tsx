import * as React from 'react'
import { useTodoState } from '../stateManagement/ContextProvider'

interface Props {}

const TodoList: React.FC<Props> = (props) => {
  const {
    state: { todo, todoList },
    dispatch,
  } = useTodoState()

  return (
    <>
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            {t.title} {t.message}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
