import * as React from 'react'
import { useTodoState } from '../stateManagement/ContextProvider'
import { todo } from '../stateManagement/reducer'

interface ITitleProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Title: React.FunctionComponent<ITitleProps> = ({ setShowForm }) => {
  const ZERO_TODOS = 0
  const { state: todoList } = useTodoState()
  const [pendingTodos, setPendingTodos] = React.useState(0)
  const title = 'Todo App'
  React.useEffect(() => {
    const todoPending = todoList.filter((todo) => !todo.isDone)
    setPendingTodos(todoPending.length)
  }, [todoList])

  return (
    <>
      <h1
        className='mt-2 text-4xl font-bold leading-normal mb-2 text-orange-500 hover:text-orange-400 hover:underline cursor-pointer'
        onClick={() => setShowForm((prev) => !prev)}
      >
        {title}
      </h1>
      {pendingTodos > ZERO_TODOS && <h2>Todos Left {pendingTodos}</h2>}
    </>
  )
}

export default Title
