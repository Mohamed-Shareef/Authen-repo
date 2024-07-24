import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../firebase"
const Register=()=>{
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    const navigate=useNavigate();
    const handleregister=async(e)=>{
        e.preventDefault()

        try{
           await auth.createUserWithEmailAndPassword(email,pass)
           console.log(email+" "+pass);
           alert("Email ID is Register Successfully. please Login!");
           navigate("/");


        }
        catch(err){
            console.log(err);
            
        }
    }
    return(
        <>
        <h2>REGISTER PAGE</h2>
        <form onSubmit={handleregister}>
            
               
                    <h3>Email:</h3>
                    <input type="email" value={email} placeholder="Enter your email..." onChange={(e)=>{setemail(e.target.value)}}/>
               
                    <h3>Password:</h3>
                    <input type="password" value={pass} placeholder="Enter your pass..." onChange={(e)=>{setpass(e.target.value)}}/>
               
                    <button type="submit">REGISTER</button>
                    <div>
                     <Link to={"/"} style={{textDecoration:"none", color:"black"}}><button>GO TO LOGIN</button></Link>
                     </div>
                
            
        </form>
        </>
    )
}
export default Register