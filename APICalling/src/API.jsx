import axios from 'axios'
import react, { useEffect, useState } from 'react'


export const API = () =>{
    const [data1,setData] = useState()

    useEffect(() =>{
        fetchDetails()
    },[])
    const fetchDetails = async () => {
        const response = await axios.get(`https://fast-reef-22226.herokuapp.com/data`);
        // const data = await response.json();
        console.log(response.data);
        setData(response.data)
    }
    //getdata()

    return (<div>
        welcome
        {
            data1.map(e=><div key={e.id}>
                <h1>{e.author}</h1>
                <div>{e.description}</div>
                <div>{e.creation_date}</div>
                <div>{e.quality}</div>
            </div>)
        }
    </div>)
}