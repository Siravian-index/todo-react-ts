export enum todoAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE = 'UPDATE',
}
export type todo = { title: string; message: string; id: string; isDone: boolean }
export type stateType = { todo: todo; todoList: todo[] }
export type actionType = { type: todoAction; payload: todo }

function reducer(state: stateType, action: actionType) {
  const { type, payload } = action
  switch (type) {
    case todoAction.ADD:
      return { ...state, todoList: [...state.todoList, payload] }
    case todoAction.REMOVE:
      return { ...state, todoList: state.todoList.filter((t) => t.id !== payload.id) }
    case todoAction.UPDATE:
      return {
        ...state,
        todoList: state.todoList.map((t) => (t.id === payload.id ? { ...payload, isDone: !payload.isDone } : t)),
      }
    default:
      throw new Error('Illegal todoAction passed')
  }
}

export default reducer
