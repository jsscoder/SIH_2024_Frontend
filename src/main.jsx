import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authcontext from './Context/Authcontext.js'
import Authstate from './Context/Authstate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authstate>
      <App />
    </Authstate>
  </StrictMode>,
)
