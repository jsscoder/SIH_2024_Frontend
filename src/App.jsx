import { useState } from 'react'

import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/Landing'
import { MyTheme } from './Context/ThemeContext'
import Login from './Components/Login/Login'
import Overlayer from './pages/Overlay/Overlayer'
import Otp from './Components/OtpPage/Otp'
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/AdminDashboard'



import AdminORFaculty  from './Components/Confirms&Alerts/AdminORFaculty'
import { Toaster } from 'react-hot-toast'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
function App() {
  const [Theme, settheme] = useState("light");


  const setTheme = (theme) => {
    settheme(theme);
  }

  return (
    <>
       <Toaster position='top-center' />
      <MyTheme.Provider value={{ Theme, setTheme }}>
        <div className={`${Theme} w-full h-full bg-background`}>
      <BrowserRouter>
     
        <Routes>
          
          
          <Route path="/" element={<LandingPage />} />
         
          <Route path="/auth" element={<Overlayer/>} >
              <Route path="admin" element={<Login/>} />
              <Route path="faculty" element={<Register/>} />
          </Route>
          <Route path="/confirm" element={<AdminORFaculty/>} />
          <Route path="/api/login" element={<AdminDashboard/> } /> 
          <Route path="*" element={<h1>404</h1>} />
          
          
          
          {/* <Route path="/Otp" element={<Otp/>} /> */}

        </Routes>
      </BrowserRouter>

      </div>
  
      </MyTheme.Provider>
      

      
    
      
    </>
  )
}

export default App