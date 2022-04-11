import react, { useEffect, useState } from "react";
import axios from "axios";

export const ComponentA = () => {
    const [users, setNum] = useState()
    const [title,settitle] = useState();

    //const [user,userstate] = useState()

    //let url = 'https://fakestoreapi.com/products'


    useEffect(() => {
        async function getdata() {
            let res = await axios.get(`https://fakestoreapi.com/products`)
            //console.log(res.data.length)
            let main =await res.data
            
            console.log(main)
            console.log(settitle(res.data.title))

        }
        getdata()
     
    })

    return (
       
   <div>
       <h1>the title of the movie is {title}</h1>
        
       <form onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" value={users} onChange={(e)=>{setNum(e.target.value)}} />
            <button onClick={function(t){
                users.map((user)=>{
                    return <h1>{user.title}</h1>
                })
            }}>click</button>
       </form>
   </div>
    
    )
}