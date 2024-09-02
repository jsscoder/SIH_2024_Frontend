import { useState } from 'react'

import { LandingPage } from './pages/LandingPage/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <LandingPage/>
      
    </>
  )
}

export default App
