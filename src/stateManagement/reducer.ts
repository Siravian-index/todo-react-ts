export enum todoAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE = 'UPDATE',
  LOAD = 'LOAD',
}
export type todo = { title: string; message: string; id: string; isDone: boolean }
export type stateType = todo[]
export type actionType = { type: todoAction; payload: todo | stateType }

function reducer(state: stateType, action: actionType): stateType {
  const { type, payload } = action
  const todo = payload as todo
  const todoList = payload as stateType
  switch (type) {
    case todoAction.ADD:
      return [...state, payload] as stateType
    case todoAction.REMOVE:
      return state.filter((t) => t.id !== todo.id)
    case todoAction.UPDATE:
      return state.map((t) => (t.id === todo.id ? { ...payload, isDone: !todo.isDone } : t)) as stateType
    default:
      throw new Error('Illegal todoAction passed')
  }
}

export default reducer
