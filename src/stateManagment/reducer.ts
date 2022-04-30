export enum todoAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE = 'UPDATE',
}
export type todo = { title: string; message: string; id: string; isDone: boolean }
export type actionType = { type: todoAction; payload: todo[] }
export type stateType = { todo: todo; todoList: todo[] }

function reducer(state: stateType, action: actionType) {
  const { type, payload } = action
  switch (type) {
    case todoAction.ADD:
      return state
    case todoAction.REMOVE:
      return state
    case todoAction.UPDATE:
      return state
    default:
      throw new Error('Illegal todoAction passed')
  }
}

export default reducer
