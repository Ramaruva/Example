import React from 'react'
import {Link} from "react-router-dom";

function Navbar ()
{
    return (
        <>
           <div>
               <Link to="/About">About</Link>
               <Link to="/Contact">Contact</Link>
               <Link to="/Task">Task</Link>
               <Link to="/Login">Login</Link>
           </div>
        </>
    )
}
export {Navbar}