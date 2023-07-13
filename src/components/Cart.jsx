import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import trash from "./images/trash-icon.svg";
import cartEmpty from "./images/cartEmpty.svg";


const Cart = () => {
    const { cart, cartTotal, sumTotal, removeItem, clear } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (<div className="container my-4">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-secondary" role="alert">
                        No se encuentra ningún producto en el carrito!
                    </div>
                </div>
            </div>
        </div>

        )
    } else {
        return (
            <div className="container my-5">
                <div className="row py-2">
                    <div className="col-md-8">
                        <h1>Carrito de Compras</h1>
                        <table className="table">
                            <tbody>
                                {
                                    cart.map(item => (
                                        <tr key={item.id}>
                                            <td><img src={item.imagen} alt={item.titulo} width={70} /></td>
                                            <td>{item.titulo}</td>
                                            <td>Cantidad:{item.quantity} x ${item.precio}</td>
                                            <td>${item.quantity * item.precio} </td>
                                            <td><button className="btn btn-danger" title="Eliminar" onClick={() => removeItem(item.id)}><img src={trash} alt="eliminar" /></button></td>
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <td colSpan={3}>Resumen</td>
                                    <td><h4 className="text-danger">Total: ${sumTotal()}</h4></td>
                                </tr>
                                <tr>
                                    <td className=""><button className="btn" title="Vaciar Carrito" onClick={() => clear()}><img alt="Vaciar Carrito" src={cartEmpty} />Vaciar Carrito</button></td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    <div className="col-md-6">

                    </div>

                </div>

            </div>
        )

    }
}


export default Cart;