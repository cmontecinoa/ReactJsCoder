import { useState, useEffect} from "react";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import productos from "./json/productos.json";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {


    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve( id ? productos.filter(item => item.categoria === id) : productos)

            }, 1000);
        });

        promesa.then(data => {
            console.log(data);
            setItems(data);
        })
    }, [id]);



    return (
        <div className="container my-5">
            <div className="row">
                
                    <ItemList productos ={items} />
                    {/* <ItemCount stock={10} /> */}

            </div>
        </div>
    )
}
export default ItemListContainer;