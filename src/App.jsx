import { useState } from 'react'

import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/Landing'
import Login from './Components/Login/Login'
import Overlayer from './pages/Overlay/Overlayer'
import Otp from './Components/OtpPage/Otp'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Auth" element={<Overlayer/>} />
          <Route path="/Otp" element={<Otp/>} />
          <Route path="/login/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/login/TeacherDashboard" element={<TeacherDashboard/>} />
        </Routes>
      </BrowserRouter>
    
      
    </>
  )
}

export default App
