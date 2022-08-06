import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Paths from './Paths'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Paths />
    </BrowserRouter>
    
  </React.StrictMode>
)
