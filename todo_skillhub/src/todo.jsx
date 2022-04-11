import React from 'react'
import { useState } from 'react'
export const Todo = () => {
    const [task,settask]=useState("")

    const [todos,settodos]=useState([])

    const handlechange = (e) =>{
        settask(e.target.value)
    }

    const submithandler = (e) =>{
        e.preventDefault()
        console.log(task)
        const addtodo = [...todos,task]
        settodos(addtodo)
        settask("")
        
    }

  return (
    <div>
           <form onSubmit={submithandler}>
               <input type="text" value={task} onChange={handlechange}/>
               <input type="submit" name='submit' placeholder='submit' />
           </form>
           <h5>{settodos}</h5>
    </div>
  )
}

