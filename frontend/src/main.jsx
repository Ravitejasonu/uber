import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import UserContex from './context/UserContex.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserContex>
   <BrowserRouter>
    <App />
    </BrowserRouter>
   
   </UserContex>
    
  </StrictMode>,
)
