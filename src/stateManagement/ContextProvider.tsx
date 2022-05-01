import * as React from 'react'
import reducer, { actionType, stateType, todo } from './reducer'

type Props = { children: JSX.Element | JSX.Element[] }

type contextType = {
  state: stateType
  dispatch: React.Dispatch<actionType>
}

const initialState: stateType = {
  todo: { title: '', message: '', id: '', isDone: false },
  todoList: [{ title: 'todoTest1', message: 'testing context', id: '0', isDone: false }],
}

const Context = React.createContext<contextType>({} as contextType)
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <>
      <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    </>
  )
}

export default ContextProvider

export const useTodoState = () => React.useContext(Context)
