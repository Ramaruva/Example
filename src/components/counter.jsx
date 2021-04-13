import react, { useState } from "react"
import {v4 as uuid} from "uuid"
function Change()
{
    let [counter ,setC]=useState(0)
    let [query,setQuery]=useState(" ")
    let [todos,setTodo]=useState([])
   let update =(val)=>
    {
       setC(counter+val)
    }
    let  todofunction =(e)=>
    {
        setQuery(e.target.value)
    }
    let updatequery =()=>
    {
        let obj={
            id:uuid(),
            title:query,
            status:false,
            togg:"toggle"
        }
        setTodo([...todos,obj])
        setQuery(" ")
        console.log(obj.id);
    }
    
    
    return(
        <>
         <h1>Counter</h1>
         <h2>{counter}</h2>
         <button onClick={()=>update(1)}>Add</button>
         <button onClick={()=>update(-1)}>Sub</button>
         <h1>TODO</h1>
         <input type="text" value={query} onChange={todofunction} placeholder="add something"/>
         <button onClick={updatequery}>ADD</button>
         <h1>{query}</h1>
         <div>
            {
                todos.map((item)=>{
                   return  <div key={`${item.id}`}>{`${item.title} -${item.status}-${item.togg}`}</div>
                })
            }
         </div>
         
        </>
    )
}
export {Change}