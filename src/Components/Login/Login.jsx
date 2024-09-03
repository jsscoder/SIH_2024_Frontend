import React, { useContext, useState } from 'react';
import Inputs from '../ui/Inputs';
import google from '../../assets/Google.png'
import Authcontext from '../../Context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {   

    const {isnotLogged,setLogged} = useContext(Authcontext)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const [confirmPassword,setConfirmPassword] = useState("")
    const [role,setRole] = useState('')
    const [wrong,setWrong] = useState("border-none")
    const [instituteId,setInstitueId] = useState("")
    const [department,setDepartment] = useState("")

    const handleRegister =()=>{
        if(confirmPassword=== password){
            // Register api call
        }else{
            setWrong("border animate-shake animate-twice animate-duration-1000")
            setTimeout(() => {
                setWrong('border-none ')
            }, 1000);
        }
    }

    return (
        <>

        {/* login form */}
        <div className={`w-[70%] relative  min-h-[80%] max-h-[95%] h-auto bg-card border-background/20 border-2 rounded-lg overflow-hidden flex shadow-2xl shadow-background`}>
            <div className={`md:flex flex-col justify-center items-center gap-5 rounded-xl bg-card md:w-[50%] w-full md:py-12 py-6 ${isnotLogged?"hidden":"flex"}`}>
                <h1 className="text-3xl font-semibold font-Google1 text-mytext">Admin Login </h1>
                
             
                <Inputs value={email} Changes={(e)=>setEmail(e.target.value)} id={"email"} pholder='Email'/>
                <Inputs value={password} Changes={(e)=>setPassword(e.target.value)} id='password' pholder='Password' />
              
                <p className=''>Forget Password?</p>
                <div className="flex gap-2 justify-center items-center border-gray-500 border cursor-pointer p-1 rounded">
                    <img src={google} alt="" className="h-5 inline" />
                    <span>SignIn with Google</span>
                </div>
                <button className='bg-bg_btn p-2 rounded text-white px-10 font-bold'>SIGN IN</button>
                <p className='flex md:hidden'>Don't have account<span className='text-blue-600 cursor-pointer font-bold' onClick={()=>{setLogged(true)}}> SignUp </span></p>                

            </div>


            {/*  */}
            <div className={`absolute w-[50%] ${isnotLogged?"left-0 rounded-r-[64px] ":"right-0 rounded-l-[64px] "} bg-primary hidden md:flex flex-col justify-center items-center text-white h-full  gap-5 transition-[border-radius] duration-[100ms] ease-in-out `}>
                <h1 className="font-extrabold text-[2.1rem]">{isnotLogged?"Have An Account!!!":"Hello, Friends!"}</h1>
                <p className="">{isnotLogged?"Have an account":"New User???"}</p>
                <button className="capitalize bg-transparent rounded shadow-lg border-white border py-1 px-4" onClick={()=>{isnotLogged?setLogged(false):setLogged(true)}}>{isnotLogged?"Sign In":"SignUp"}</button>
            </div>

            {/* signup form */}
            <div className={`md:w-[50%] h-auto w-[100%] md:flex flex-col justify-center items-center gap-5 rounded-xl bg-card py-12 ${isnotLogged?"flex":"hidden"}`}>
                <h1 className=""></h1><h1 className="text-3xl font-bold">SignUp</h1>
                <div className="flex gap-2 justify-center items-center border-gray-500 border cursor-pointer p-1 rounded">
                    <img src={google} alt="" className="h-5 inline" />
                    <span>SignIn with Google</span>
                </div>
                <p className="text-sm">Or</p>
                <Inputs id={"User"} value={username} Changes={(e)=>setUsername(e.target.value)} pholder='UserName'/>
                <Inputs id={"email"} value={email} Changes={(e)=>setEmail(e.target.value)} pholder='Email'/>
                <Inputs id={"InstituteId"} value={instituteId} Changes={(e)=>setInstitueId(e.target.value)} pholder='Institute Id'/>
                <Inputs id={"Department"} value={department} Changes={(e)=>setDepartment(e.target.value)} pholder='Department'/>
                <Inputs id={"password"} value={password} Changes={(e)=>setPassword(e.target.value)} pholder='Password'/>
                <Inputs id={"confirmPassword"} wrong={wrong} value={confirmPassword} Changes={(e)=>setConfirmPassword(e.target.value)} pholder='Confirm Password'/>
                <select name="" id="" value={role} onChange={(e)=>setRole(e.target.value)} className='w-[70%] p-2 rounded-lg shadow-md'>
                    <option value="">Your Role</option>
                    <option value="admin">Admin</option>
                    <option value="faculty">Faculty</option>
                </select>
                <button onClick={handleRegister} className='bg-primary border-red-500 p-2 rounded text-white px-10 font-bold'>SIGN IN</button>
                <p className='flex md:hidden'>Have Account <span className='text-blue-600 cursor-pointer font-bold' onClick={()=>{setLogged(false)}}> SignIn </span></p>
            </div>
        </div>
        </>
    )
}

export default Login;