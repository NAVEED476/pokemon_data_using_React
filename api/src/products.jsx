import react, { useEffect, useState } from "react";
import axios from 'axios'


export const Data = () => {
    const url = "https://620e9549ec8b2ee283266647.mockapi.io/products"
    const [product, setproduct] = useState(null)

    useEffect(() => {
        axios.get(url).then(res => {
            setproduct(res.id)
        })
    }, [url])



    if (product) {
        return <div>
            <h1>{product.name}</h1>
        </div>
    }
    else{
        return <div></div>
    }
}