import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Body} from './Main/Body/Body'
import {Navbar} from './Main/Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Body />
      <Navbar />
    </div>
  )
}

export default App
