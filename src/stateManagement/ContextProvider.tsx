import * as React from 'react'
import reducer, { actionType, stateType, todo } from './reducer'

type Props = { children?: React.ReactNode }

type contextType = {
  state: stateType
  dispatch: React.Dispatch<actionType>
}

const initialState: stateType = {
  todo: { title: '', message: '', id: '', isDone: false },
  todoList: [{ title: 'Finish the todo app', message: 'Add your favorite styles', id: '0', isDone: false }],
}

const Context = React.createContext<contextType>({} as contextType)
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {
    console.log('TODOS: add styles')
  }, [state])
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default ContextProvider

export const useTodoState = () => React.useContext(Context)
