import React from "react"
import { Link } from "react-router-dom"
const Home=()=>{
    return(
        <>
        <h2>Home Page</h2>
        <h2>welcome to our Page</h2>
        <h4>Hello Guest</h4>
        <div>
         <Link to={"/"} style={{textDecoration:"none", color:"black"}}><button>LOGOUT</button></Link>
        </div>
        </>
    )
}
export default Home