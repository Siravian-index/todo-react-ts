import * as React from 'react'
import { useTodoState } from '../stateManagement/ContextProvider'
import { todo, todoAction } from '../stateManagement/reducer'

const TodoList: React.FC = () => {
  const {
    state: { todoList },
    dispatch,
  } = useTodoState()

  const checkBox = (e: React.ChangeEvent<HTMLInputElement>, todo: todo) => {
    dispatch({ type: todoAction.UPDATE, payload: todo })
  }

  const deleteOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, todo: todo) => {
    dispatch({ type: todoAction.REMOVE, payload: todo })
  }
  // sort this based on the isDone key
  return (
    <div>
      {todoList
        .slice()
        .sort((a, b) => Number(a.isDone) - Number(b.isDone))
        .map((t) => (
          <div key={t.id}>
            <div>{t.title}</div>
            <div>{t.message}</div>
            <input type='checkbox' checked={t.isDone} onChange={(e) => checkBox(e, t)} />
            <button onClick={(e) => deleteOnClick(e, t)}>delete</button>
          </div>
        ))}
    </div>
  )
}

export default TodoList
