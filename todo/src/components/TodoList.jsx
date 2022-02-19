import React, { useState } from 'react'
import { TodoForm } from './Todoform'


export const TodoList = () => {
    const [todos,settodos] = useState([])

    const addtodos = (todo) =>{
        if(!todo.text || /^\s*$/.test(todos.text)){
            return
        }
        const newTodos = [todo, ...todos]
        settodos(newTodos)
        console.log(...todos)
    }
    return (<>
        <div>
            <h1>what are the plans today</h1>
            <TodoForm onSubmit={addtodos}/>
        </div>
        <div>
            <h1>{}</h1>
        </div>
   </> )
}