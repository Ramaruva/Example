import React, {  useState } from 'react'

export const AuthContext =React.createContext();


const AuthContextProvider =({children})=>
{
    const [isAuth,setIsAuth]=useState(false);
    const [token,setToken]=useState("");
    const loginSuccess =(token)=>
    {
        setIsAuth(true);
        setToken(token);
    }
    const loginOut =()=>
    {
        setIsAuth(false);
    }
    const value ={
        isAuth,
        token,
        loginSuccess,
        loginOut
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export {AuthContextProvider}