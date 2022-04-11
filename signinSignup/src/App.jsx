import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Signup} from './SignSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Signup />
     
    </div>
  )
}

export default App
