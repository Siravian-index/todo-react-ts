import * as React from 'react'
import { useTodoState } from '../stateManagement/ContextProvider'
import { todo, todoAction } from '../stateManagement/reducer'
import Todo from './Todo'

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
  return (
    <div>
      {todoList
        .slice()
        .sort((a, b) => Number(a.isDone) - Number(b.isDone))
        .map((t) => (
          <Todo key={t.id} todo={t} checkBox={checkBox} deleteOnClick={deleteOnClick} />
        ))}
    </div>
  )
}

export default TodoList
