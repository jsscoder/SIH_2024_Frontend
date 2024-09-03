import { useState } from 'react'

import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage/Landing'
import { MyTheme } from './Context/ThemeContext'


import Overlayer from './pages/Overlay/Overlayer'
import AdminORFaculty  from './Components/Confirms&Alerts/AdminORFaculty'

function App() {
  const [Theme, settheme] = useState("light");


  const setTheme = (theme) => {
    settheme(theme);
  }

  return (
    <>
       
      <MyTheme.Provider value={{ Theme, setTheme }}>
        <div className={`${Theme} w-full h-full bg-background`}>
      <BrowserRouter>
     
        <Routes>
          
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/Auth" element={<Overlayer/>} />
          <Route path="/confirm" element={<AdminORFaculty/>} />
          
        </Routes>
      </BrowserRouter>

      </div>
  
      </MyTheme.Provider>

      
    
      
    </>
  )
}

export default App
