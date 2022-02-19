import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {CreateContextprovider} from './Main/Context/Contextprovide'

ReactDOM.render(
  <React.StrictMode>
    <CreateContextprovider>
      <App/>
    </CreateContextprovider>
  </React.StrictMode>,
  document.getElementById('root')
)
