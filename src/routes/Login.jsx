import axios from "axios";
import React, { useContext, useState } from "react"
import { Redirect } from "react-router-dom";
import { AuthContext } from "../components/AuthContextProvider"

const Login =()=>
{
    const {isAuth,loginSuccess ,token}=useContext(AuthContext);
    const [email,setEmail]=useState(" ");
    const [password,setPass]=useState("");
    const handleSubmit =(e)=>
    {
         e.preventDefault();
         axios.post("https://reqres.in/api/login",{
             email,password
         }).then((res)=>loginSuccess(res.data.token))
    }
    if(isAuth)
    {
        <Redirect to='/Task' />
    }
    return !isAuth ? (
        <>
           <form onSubmit={handleSubmit}>
               <label htmlFor="">
                   Email
                   <input type="email" value ={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
               </label>
               <label htmlFor="">
                   Password
                   <input type="password" value ={password} onChange={(e)=>setPass(e.target.value)} placeholder="pass"/>
               </label>
               <button type="submit">Submit</button>
           </form>

        </>
    ):(<>
     <h1>{token}</h1>
     
    </>)

}
export {Login}