import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/Landing'
import Login from './Components/Login/Login'
import Overlayer from './pages/Overlay/Overlayer'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
        <Route path="/login/adminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Overlayer />} />


   
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
