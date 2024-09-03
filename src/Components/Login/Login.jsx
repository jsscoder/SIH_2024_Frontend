import React, { useContext, useState } from 'react';
import Inputs from '../ui/Inputs';
import google from '../../assets/Google.png'
import Authcontext from '../../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

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
        <div className={`w-[70%]  relative  min-h-[80%] max-h-[90%] bg-white ${isnotLogged?"rounded-r-xl":"rounded-l-xl"} flex`}>
            <div className=' flex flex-col justify-center items-center gap-5 rounded-xl bg-white w-[50%] py-12'>
                <h1 className="text-3xl font-bold">SignIn</h1>
                <div className="flex gap-2 justify-center items-center border-gray-500 border cursor-pointer p-1 rounded">
                    <img src={google} alt="" className="h-5 inline" />
                    <span>SignIn with Google</span>
                </div>
                <p className="text-sm">Or</p>
                <Inputs value={email} Changes={(e)=>setEmail(e.target.value)} id={"email"} pholder='Email'/>
                <Inputs value={password} Changes={(e)=>setPassword(e.target.value)} id='password' pholder='Password' />
                <select name="" id="" value={role} onChange={(e)=>setRole(e.target.value)} className='w-[70%] p-2 rounded-lg shadow-md' >
                    <option value="">Your Role</option>
                    <option value="admin">Admin</option>
                    <option value="faculty">Faculty</option>
                </select>
                <p className=''>Forget Password?</p>
                <button className='bg-primary p-2 rounded text-white px-10 font-bold'>SIGN IN</button>


            </div>
            <div className={`absolute w-[50%] ${isnotLogged?"left-0 rounded-r-[64px] ":"right-0 rounded-l-[64px] "} bg-primary flex flex-col justify-center items-center text-white h-full  gap-5 transition-[border-radius] duration-[100ms] ease-in-out`}>
                <h1 className="font-extrabold text-[2.1rem]">{isnotLogged?"Have An Account!!!":"Hello, Friends!"}</h1>
                <p className="">{isnotLogged?"Have an account":"New User???"}</p>
                <button className="capitalize bg-transparent rounded shadow-lg border-white border py-1 px-4" onClick={()=>{isnotLogged?setLogged(false):setLogged(true)}}>{isnotLogged?"Sign In":"SignUp"}</button>
            </div>
            <div className="w-[50%] flex flex-col justify-center items-center gap-5 rounded-xl bg-white py-12">
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

            </div>
        </div>
        </>
    )
}

export default Login;