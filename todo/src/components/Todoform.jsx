import react, { useState } from "react";

export const TodoForm = (props) => {
    const [input, setInput] = useState('')

    const handlechange  = (e)=>{
        setInput(e.target.value)
    }

    const handlesubmit = (e) =>{
        e.preventDefault()


        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })

        setInput('')
    }

    return (
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="add to do" value={input}  className="todo-form" onChange={handlechange}/>
            <button >click me </button>
        </form>
    )
}