import * as React from 'react'
import { todo } from '../stateManagement/reducer'

interface ITodoProps {
  todo: todo
  deleteOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todo: todo): void
  checkBox(e: React.ChangeEvent<HTMLInputElement>, todo: todo): void
}

const Todo: React.FunctionComponent<ITodoProps> = ({ todo: t, deleteOnClick, checkBox }) => {
  return (
    <div key={t.id}>
      <div>{t.title}</div>
      <div>{t.message}</div>
      <input type='checkbox' checked={t.isDone} onChange={(e) => checkBox(e, t)} />
      <button onClick={(e) => deleteOnClick(e, t)}>delete</button>
    </div>
  )
}

export default Todo
