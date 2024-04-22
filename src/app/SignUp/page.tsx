'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from "react-icons/fa6";
import './Signin.css';
import Link from 'next/link'
export default function Signin() {
    return (
      <div>
        <div className='Container'>
        <ToastContainer/>
        <div className='card1'>
            <div className='head'>Register</div>
            <br/>
            <input  type="text" placeholder='Name'></input>
            <br/>
            <input  type='email' placeholder='Email'></input>
            <br/>
            <input  type="password" placeholder='Password'></input>
            <br/>
            <input  type="password" placeholder='Confirm Password'></input>
            <br/>
            <button className='btn' onClick={()=>{toast.success("Account Created")}}>Register</button>
            <br/>
             <p style={{color:"white"}}>Have Account?<Link href="Login" style={{color:"cyan"}}> Login</Link></p>
             <div style={{display:"flex",justifyContent:"end"}}>
                 <p style={{color:"#8bffe8"}}><Link href="Tool"><FaUser/></Link></p>
              </div>
        </div>
        </div>
      </div>
    );
  }