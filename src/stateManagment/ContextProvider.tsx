import * as React from 'react'
import reducer, { stateType, todo } from './reducer'

type Props = { children: JSX.Element }

const initialState: stateType = {
  state: {
    todo: {
      title: '',
      message: '',
      id: '',
      isDone: false,
    },
    todoList: [] as todo[],
  },
}

const Context = React.createContext<stateType>(initialState)
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <>
      <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>
    </>
  )
}

export default ContextProvider
