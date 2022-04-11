import react, { useState } from 'react'

export const Signup = () =>{
    const [userRegistration,setUserRegistration] = useState({
        Name:"",
        email:"",
        Number:"",
        password:"",
    })

    const [record,setrecord]=useState([])

    const handleinput = (e) =>{
        const name = e.target.name;
        const value  = e.target.value;
        console.log(name,value)
        setUserRegistration({...userRegistration,[name]:value})

        
    }

    const handlesubmit=(e)=>{
        e.preventDefault()



        const newRecord = {...userRegistration, id:new Date().getTime().toString()}
        console.log(record)
        setrecord([...record, newRecord])
        console.log(record)


        setUserRegistration({Name:"" , email:"" , Number:"" , password: ""})
    }
    return (
        <>
        <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" autoComplete='off' name='Name'  id='name' value={userRegistration.Name} onChange={handleinput}/>
            </div>
            <div>
                <label htmlFor="">email</label>
                <input type="email" autoComplete='off'  name='email' id='email' value={userRegistration.email} onChange={handleinput}/>
            </div>
            <div>
                <label htmlFor="">Number</label>
                <input type="number" autoComplete='off'  name='Number'  id='Number' value={userRegistration.Number} onChange={handleinput}/>
            </div>
            <div>
                <label htmlFor="">passwrod</label>
                <input type="password" autoComplete='off'  name='password' id='password' value={userRegistration.password} onChange={handleinput}/>
            </div>

            <button type='submit'>Submit</button>
        </form>

        <div>
            {
               
                record.map((data)=>{
                    // if(data.Name == ""  || data.email == "" || data.phone == "" || data.password == ""){
                    //     alert("enter name")
                    // }
                    
                    return (
                        <>
                        <div key={data.id}>
                            <p>{data.Name}</p>
                            <p>{data.email}</p>
                            <p>{data.Number}</p>
                            <p>{data.password}</p>
                        </div>
                        </>
                    )

                })
            }
        </div>
        </>
    )
}