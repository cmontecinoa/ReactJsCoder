import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, cartTotal, sumTotal, removeItem, clear} = useContext(CartContext);
    return (
        <div>
            <h1>Cart</h1>
            <h2> Total de productos : {cartTotal()}</h2>
            <h3> Total de sumatoria: {sumTotal()}</h3>

            <ul>
                {cart.map(items => <li>{items.titulo + "    x("+items.quantity+")"}</li>)}
            </ul>

        </div> 
    )
}


export default Cart;