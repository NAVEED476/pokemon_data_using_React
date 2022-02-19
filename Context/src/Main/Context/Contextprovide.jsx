import { createContext, useState } from "react";
import { useContext } from "react";



export const Context = createContext()

const [cart, cartstate] = useState(0)

const Cartfunction = (v) => {
    cartstate(cart + v)
}

export const CreateContextprovider = ({ children }) => {
    return <Context.Provider value={{cart, Cartfunction}}>{children}</Context.Provider>
}