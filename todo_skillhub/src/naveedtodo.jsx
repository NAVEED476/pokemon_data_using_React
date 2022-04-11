import React, { useState } from 'react'

export const Naveedtodo = () => {
    const [data,setdata] =useState("")
    const [todo,settodo] = useState([])

    const handlechange = (e) =>{
        setdata(e.target.value)
    }
    const handlesubmit = e =>{
        e.preventDefault()
        const newtodo = [...todo,data]
        settodo(newtodo)
        setdata("")
        console.log(data)
    }
    const deletebutton = (index) =>{
        const newtodo = todo.filter((list,indexvalue)=>index!==indexvalue)
        settodo(newtodo)
    }
   return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" value={data} onChange={handlechange}  />
            <input type="submit"  name="add"/>
        </form>
        <div>
            {todo.map((list,index)=><div key={index}><h5>{list}</h5> <button onClick={()=>deletebutton(index)}>delete</button></div>)}
        </div>
    </div>
  )
}
