import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { Data } from './products'
import {Home} from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import {Error} from './pages/Errorpage'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to = "#">Home</Link>
        <Link to = "#About">About</Link>
        <Link to = "#Profile">Profile</Link>
      </nav>
      <Routes>
        <Route path  = "/" element = {< Home/>} />
        <Route path  = "/About" element = {< About/>} />
        <Route path  = "/profile:username" element = {< Profile/>} />
        
        <Route path='*' element = {<Error/>}/>

      </Routes>
    </Router>
  )
}

export default App
