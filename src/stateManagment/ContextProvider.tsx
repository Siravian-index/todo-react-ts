import * as React from 'react'
import reducer, { actionType, stateType, todo } from './reducer'

type Props = { children: JSX.Element }

type contextType = {
  state: stateType
  dispatch: React.Dispatch<actionType>
}

const Context = React.createContext<contextType>({} as contextType)
const ContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {} as stateType)
  return (
    <>
      <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    </>
  )
}

export default ContextProvider
