import React, { useEffect, useState } from 'react'
import { useContext } from 'react'

import Auth from '../Contexts/Authcontext'



const AuthContext = React.createContext()



export const useAuth=()=>{
    return useContext(AuthContext)
}

export default function Authprovider(children) {
const [currentuser,setcurrentuser]=useState()


function signup(firstname,lastname,email,phone,password){
   return Auth.createUserwithemailandpassword(firstname,lastname,email,phone,password)
}

useEffect(()=>{

    const unsubscribe = Auth.onAuthstatechanged(user=>{
        setcurrentuser(user)
    })

    return unsubscribe

},[])



    const value = {
        currentuser,
        signup
    }
  return (
    <AuthContext.provider value = {value}>
        {children}
    </AuthContext.provider>
  )
}


