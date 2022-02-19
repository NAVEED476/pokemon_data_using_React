import { handlecart } from "../../Context/Contextprovide";
import { useContext } from "react";
export const Button = () => {
    const { handlecart } = useContext(Context);
    return <button onClick={() => { handlecart(1) }}> Add to cart</button>
}