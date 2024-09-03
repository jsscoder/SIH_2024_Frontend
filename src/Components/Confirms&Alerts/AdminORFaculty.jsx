import React from 'react'
import { Button } from "flowbite-react";
import { FaShieldAlt } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const AdminORFaculty = () => {
             
    const [isFaculty, setIsFaculty] = useState(false);
    const [admin, setAdmin] = useState(false);


  return (
      <div className='overflow-hidden flex  justify-center items-center gap-10 fixed h-screen w-screen bg-white/20 transition'>

           <Link to="/auth"> 

<Button size="xl"> <FaShieldAlt className='mr-2 h-5 w-5' />  Admin</Button>
</Link> 

<Button size="xl">   <IoMdSchool className='mr-2 h-5 w-5' /> Faculty </Button>
             

           

      </div>

  )
}
