import react from "react"
import { useNavigate } from "react-router-dom"

export const Home = ()=>{
    let navigate = useNavigate()
    return <div>
        <h1>this the home page </h1>
        <button onClick={()=>{navigate("./About")}}>click to move about page</button>
    </div>
}