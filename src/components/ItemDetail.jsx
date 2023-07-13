import { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) =>{
        console.log("Testing Quantity:" + quantity)
        addItem(item, quantity); 
    }

    useEffect(() =>{
        setItem(producto);
    },[producto]);

    return (
        <div className="container ">
            <div className="row mt-5">
                <div className="col-md-3 offset-md-3">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                  

                </div>
                <div className="col-md-3">
                    <h3>{item.titulo}</h3>
                    <h3>{item.descripcion}</h3>
                    <h3><b>${item.precio}</b></h3>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;