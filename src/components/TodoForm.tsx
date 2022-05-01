import * as React from 'react'
import { nanoid } from 'nanoid'

import { useTodoState } from '../stateManagement/ContextProvider'
import { todo, todoAction } from '../stateManagement/reducer'

type userInputType = { title: string; message: string }

const TodoForm: React.FC = () => {
  const [{ title, message }, setUserInput] = React.useState<userInputType>({ title: '', message: '' })
  const { dispatch } = useTodoState()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title && message) {
      const todo: todo = { title, message, isDone: false, id: nanoid() }
      dispatch({ type: todoAction.ADD, payload: todo })
      setUserInput({ title: '', message: '' })
    }
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <label>
          Title:
          <input value={title} onChange={(e) => setUserInput({ message, title: e.target.value })} type='text' />
        </label>
      </div>
      <div>
        <label>
          Message:
          <input value={message} onChange={(e) => setUserInput({ title, message: e.target.value })} type='text' />
        </label>
      </div>
      <div>
        <button type='submit'>Add todo</button>
      </div>
    </form>
  )
}

export default TodoForm
