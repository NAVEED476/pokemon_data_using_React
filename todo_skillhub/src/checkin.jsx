
import React from 'react'
import { useState } from 'react'

const Checkin = () => {
    const [data, setdata] = useState("")
    const [todo, settodo] = useState([])

    const handlechange = e => {
        setdata(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        const newtodo = [...todo, data]

        settodo(newtodo)

        console.log(data)
    }
    const deletetodo = (indexvalue) => {
        const newtodo = todo.filter((list, index) => indexvalue !== index)
        settodo(newtodo)
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder='enter todo' value={data} onChange={handlechange} />
                <input type="submit" name='add' />
            </form>
            <div>
                {todo.map((list, index) => <div key={index}><h5>{list}</h5> <button onClick={() => { deletetodo(index) }}>delete</button></div>)}
            </div>
        </div>
    )
}

export default Checkin