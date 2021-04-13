import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Task (){
    const [data,setData] =useState([]);
    const getTodos  = ()=>
    {
        axios.get("https://ajmalmiyan-json-mocker.herokuapp.com/tasks").then((res)=>setData(res.data))
    }
    useEffect(()=>{
        getTodos();
    },[])
    console.log(data);
    return (
        <>
        <h1>This is Task page</h1>
        {
        data?.map((item)=><Link to={`/Task/${item.id}`} key={item.id}>{item.title}</Link>)
        }
        </>
    )
}
export {Task}