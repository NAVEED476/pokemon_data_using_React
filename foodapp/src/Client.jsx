import React from 'react'
import { useState } from 'react'

const Client = () => {
    const [user, setuser] = useState("")
    const [data,setdata] = useState([])
    const handlechange = (e) => {
        setuser(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        fetch(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`).then(res => res.json()).then(data => setdata(data))
        console.log(user)
    }
    return (
        <>
            <div>hi this is the client search engine</div>
            <div>
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder='enter name' value={user} onChange={handlechange} />
                    <input type="submit" name="Search" />
                    {
                        data.map((movie,index)=><div key={index}>{movie.name}</div>)
                    }
                </form>
            </div>
        </>

    )
}

export default Client