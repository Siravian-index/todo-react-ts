enum todoAction {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  UPDATE = 'UPDATE',
}
type todo = { title: string; description: string; id: number }

type actionType = { type: todoAction; payload: todo[] }
type stateType = { todos: todo[] }

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
