import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, sumTotal } = useContext(CartContext);

    const generarOrdenDeCompra = () => {

        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

        const buyer = { name: nombre, phone: telefono, email: email };
        const items = cart.map(item => ({ id: item.id, title: item.titulo, price: item.precio }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = { buyer: buyer, items: items, date: date, total: total };
        console.log(order);

        //Insertar Orden de Compra a Firestore
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);

        })

        .catch(resultado => {
            console.log("Error no se puedo completar la orden!");
        })
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1> Productos Seleccionados</h1>
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={70} /></td>
                                        <td>{item.titulo}</td>
                                        <td>Cantidad:{item.quantity} x ${item.precio}</td>
                                        <td>${item.quantity * item.precio} </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3}>Resumen</td>
                                <td><h4 className="text-danger">Total: ${sumTotal()}</h4></td>
                            </tr>


                        </tbody>

                    </table>


                </div>
                <div className="col-md-6">
                    <form className="text-center">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className="form-control" id="InputNombre" placeholder="Ingresa Tu Nombre" onInput={(e) => { setNombre(e.target.value) }} />

                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="InputEmail" placeholder="Ingresa Tu Email" onInput={(e) => { setEmail(e.target.value) }} />

                        </div>
                        <div className="form-group">
                            <label>Telefono</label>
                            <input type="text" className="form-control" id="InputTelefono" placeholder="Ingresa Tu Telefono" onInput={(e) => { setTelefono(e.target.value) }} />

                        </div>

                        <button type="button" onClick={generarOrdenDeCompra} className="btn btn-danger">Confirmar y Generar Orden</button>
                    </form>

                </div>

            </div>
            <div className="row my-2">
                <div className="col text-center ">
                    {orderId ? <div className="alert alert-secondary">
                        <h2>Gracias por tu compra!</h2>
                        <h3>Tu orden de compra es : #{orderId}</h3>
                        </div> 
                        : ""}
                </div>
            </div>

        </div>
    )
}

export default Checkout;