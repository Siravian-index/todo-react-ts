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
  return (
    <>
      <div>
        {todoList.map((t) => (
          <div key={t.id}>
            <div>{t.title}</div>
            <div>{t.message}</div>
            <input type='checkbox' checked={t.isDone} onChange={(e) => checkBox(e, t)} />
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList
