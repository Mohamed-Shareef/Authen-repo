import React, { useState } from "react"
import { Link, useNavigate, } from "react-router-dom"
import {auth} from "../firebase"
import useOnlineStatus from "../useOnlineStatus"
const Login=()=>{
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()
    const onlineStatus=useOnlineStatus();

    const handleLogin= async(e)=>{
      e.preventDefault();

      try{
        await auth.signInWithEmailAndPassword(email,password)
        console.log(email+" "+password);
        setemail("")
        setpassword('')
        navigate("/home")
        

      }
      catch(err){
        console.log(err);
      }
    }

    if(onlineStatus === false) return(<h1>Your Network is Offline check your internet</h1>)
    return(
        <>
        
        <h1>LOGIN PAGE</h1>
        <form onSubmit={handleLogin}>
        
                <div>
                        <h3>Email:</h3>
                        </div>
                    
                    <div>
                        <input type="email" required value={email} placeholder="Enter your email..." onChange={(e)=>{
                            
                            setemail(e.target.value)
                            // console.log(e.target.value);
                        }} />
                        </div>
            
        
                
                <div>
                        <h3>password:</h3>
                </div>
                <div>
                        <input type="password" required value={password} placeholder="Enter your password..." onChange={(e)=>{
                            setpassword(e.target.value);
                            // console.log(e.target.value);
                        }} />
                    </div>
                
               <div>
                    <button type="submit">LOGIN</button>
                </div>
                <div>
                    <Link to={"/register"} style={{textDecoration:"none", color:"black"}}><button>GO TO REGISTER</button></Link>
                </div>
            

        </form>
        </>
    )
}
export default Login;