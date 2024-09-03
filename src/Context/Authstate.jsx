import React, { useState } from 'react'
import Authcontext from './Authcontext'

const Authstate = ({children}) => {

    const [isnotLogged,setLogged] = useState(false)

  return (
    <>
        <Authcontext.Provider value={{isnotLogged,setLogged}}>
            {children}
        </Authcontext.Provider>
    </>
  )
}

export default Authstate