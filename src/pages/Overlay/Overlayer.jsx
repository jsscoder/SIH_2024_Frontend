

import { Outlet } from 'react-router-dom'

const Overlayer = () => {


  return (
    <>

        <div className="flex h-screen justify-center items-center bg-">
           <Outlet/>
        </div>


      
    </>
  )
}

export default Overlayer
