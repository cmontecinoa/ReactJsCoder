import cartImg from "./images/cart.svg"
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        (cartTotal() > 0 )?
        <div className="container">
        <Link className="btn btn-light border border-dark position-relative" to={"/cart"}> 
            <img src={cartImg} alt="carrito" width={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill border border-dark">
            {cartTotal()}
            </span>
        </Link>
        </div> : ""
    )

}

export default CartWidget;