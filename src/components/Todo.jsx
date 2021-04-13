import react, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import { TodoList } from './Todolist'
import {Data} from './Fetch'
function Todo()
{
    const [Text,setText]=useState(" ")
    const [list,setList]=useState([])
    const updateChange=(item)=>
    {
        let obj={
            ID:uuid(),
            Title:item,
            Status:false
        }
        setList([...list,obj])
    }
    Data()

    return(
        <>
           <h1>TODO</h1>
           <input type="text" value={Text} onChange={(e)=>setText(e.target.value)}/>
            <TodoList Text={Text} updateChange={updateChange} />
           
        </>
    )
}
export {Todo}