import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { API } from './API'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <API/>
    </div>
  )
}

export default App
