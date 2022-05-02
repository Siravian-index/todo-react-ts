import { todo } from './../stateManagement/reducer'
import { todoList } from '../stateManagement/reducer'

const ENDPOINT = 'http://localhost:8080/api/v1/todos'

enum HTTP_METHODS {
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type todoWithoutId = { title: string; message: string; isDone: boolean }

// TODO handle errors in a better way
export const getTodos = async () => {
  try {
    const res = await fetch(ENDPOINT)
    const data: todoList = await res.json()
    return data
  } catch (err) {
    throw new Error(`Couldn't fetched ${err}`)
  }
}

export const createTodo = async (data: todoWithoutId) => {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const todo: todo = await res.json()
  return todo
}

export const updateTodo = async (todo: todo) => {
  const todoJSON = JSON.stringify(todo)
  await fetch(ENDPOINT, { method: 'PUT', body: todoJSON })
}

export const deleteTodo = async (todo: todo) => {
  const id = todo.id
  await fetch(`${ENDPOINT}/${id}`, { method: 'DELETE' })
}
