'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa6";
import './login.css';
import Link from 'next/link'
export default function Login() {
    return (
      <div className='Container'>
      <ToastContainer/>
      <div className='card'>
        <div className='head'>Login</div>
        <input  type='email' placeholder='Email'></input>
        <br/>
        <input  type="password" placeholder='password'></input>
        <br/>
        <button className='btn' onClick={()=>{toast.success("LoggedIn")}}>Login</button>
        <br/>
        <p style={{color:"white"}}>To Create Account<Link href="SignUp" style={{color:"#8bffe8"}}> Signin</Link></p>
        <div style={{display:"flex",justifyContent:"end"}}>
        <p style={{color:"white"}}><Link href="Tool"><FaUser/></Link></p>
        </div>
      </div>
      </div>
    );
  }