import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import ContextProvider from './stateManagement/ContextProvider'

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <TodoForm />
        <TodoList />
      </ContextProvider>
    </div>
  )
}

export default App
