import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import{ComponentA} from './CopmonetA'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>hello</h1>
      <ComponentA />
    </div>
  )
}

export default App
