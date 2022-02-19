import react, { useEffect, useState } from "react";
import axios from "axios";



export const ComponentA = () =>{
    const [num, setnum] = useState();
    const [name , setname] = useState();
    const [moves,setmoves] = useState();
    useEffect (()=>{
        async function getdata () {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data)
            setname(res.data.name)
            setmoves(res.data.moves.length)
        }
        getdata()

    })
    return <>
    <h1>you chooses <span className="value">{num} </span> value</h1>
    <h1>my name is <span className="name">{name}</span></h1>
    <h1>number of moves are <span className="moves">{moves}moves</span></h1>
    <form >
        <select value={num} onChange={(e)=>{setnum(e.target.value)}}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </form>
    </>
}