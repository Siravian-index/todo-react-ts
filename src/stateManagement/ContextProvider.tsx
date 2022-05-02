import * as React from 'react'
import reducer, { actionType, todoList } from './reducer'

type Props = { children?: React.ReactNode }

type contextType = {
  state: todoList
  dispatch: React.Dispatch<actionType>
}

const Context = React.createContext<contextType>({} as contextType)
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, [] as todoList)
  React.useEffect(() => {
    console.log('TODOS: add styles')
  }, [state])
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default ContextProvider

export const useTodoState = () => React.useContext(Context)
