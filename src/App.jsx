import { useState } from 'react'

import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/Landing'

import Overlayer from './pages/Overlay/Overlayer'
import { AdminORFaculty } from './Components/Confirms&Alerts/AdminORFaculty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Auth" element={<Overlayer/>} />
          <Route path="/confirm" element={<AdminORFaculty/>} />
          
        </Routes>
      </BrowserRouter>

      </div>
    
      
    </>
  )
}

export default App
