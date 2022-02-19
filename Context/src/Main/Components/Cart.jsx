import { useContext } from "react"
import { Context } from "../Context/Contextprovide"

export const Cart = () =>{
    const {cart} = useContext(Context)
    return <div>Count : {cart}</div>
}