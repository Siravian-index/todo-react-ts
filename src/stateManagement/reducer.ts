export enum todoAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE = 'UPDATE',
}
export type todo = { title: string; message: string; id: string; isDone: boolean }
export type stateType = { todo: todo; todoList: todo[] }
export type actionType = { type: todoAction; payload: stateType }

function reducer(state: stateType, action: actionType) {
  const {
    type,
    payload: { todo, todoList },
  } = action
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
