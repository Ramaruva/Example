import react, { useEffect } from 'react'

function  Form()
{
    let obj={
        name:"",
        age:"",
        gender:"",
        married:"",
        gender:"",
        location:"",
        dept:""
    }
    const [state,setState]=useEffect(obj);
    let handleChange =()=>
    {
      let {value,name,}
    }
    return(
        <>
        <form action="">
            <div>
                <label>Name</label>
                <input 
                type="text"
                value={name}
                name="name"
                onChange={handleChange}/>
            </div>
            <div>
                <label>Age</label>
                <input 
                type="text"
                value={age}
                onChange={handleChange}/>
            </div>
            <div>
                <label>Gender</label>
                <select name="" id="">
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="d">Do not want to disclose</option>
                </select>
            </div>
        </form>
        </>
    )
}