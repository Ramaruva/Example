import React, { useContext } from 'react'
import { Route } from 'react-router';
import { AuthContext } from '../components/AuthContextProvider'
import { Redirect } from "react-router-dom";

const PrivateRoute = ({children,path,exact,redirectPath="/login",})=>
{
    const {isAuth}=useContext(AuthContext);

   return isAuth? (<> <Route path={path}>
       {children}
       </Route> </>) :(<><Redirect path={redirectPath}></Redirect></>)
}
export {PrivateRoute}