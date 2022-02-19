import { useState } from 'react'

import './App.css'
import {TodoForm} from './components/Todoform'
import {TodoList} from './components/TodoList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>hi</h1>
      <TodoList />
    </div>
  )
}

export default App
