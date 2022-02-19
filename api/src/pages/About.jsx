import reactDom from "react-dom";

import { useNavigate } from "react-router-dom";

export const About = () =>{
    let navigatetoProfile  = useNavigate()
    return <div>
        <h1>
        this the about page
        </h1>
        <button onClick={()=>{navigatetoProfile("./Profile")}}>click to profie page</button>
    </div>
}