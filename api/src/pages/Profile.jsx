

import { useNavigate } from "react-router-dom";

export const Profile = () =>{
    const navigate  = useNavigate()
    return <div>
        <h1>welcome to the profle page</h1>
        <button onClick={()=>{navigate('./Home')}}></button>
    </div>
}