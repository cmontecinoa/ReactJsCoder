import { useState , useEffect } from "react";
// import ItemCount from "./ItemCount";
// import ItemList from "./ItemList";
// import productos from "./json/productos.json";
// import { useParams } from "react-router-dom";

//Firestore
import { doc, getDoc, getFirestore} from "firebase/firestore";


const ItemListContainer = () => {


    const [items, setItems] = useState([]);
    // const {id} = useParams();

//Accediento a los productos vía json

    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve( id ? productos.filter(item => item.categoria === id) : productos)

    //         }, 1000);
    //     });

    //     promesa.then(data => {
    //         console.log(data);
    //         setItems(data);
    //     })
    // }, [id]);

//Accediendo a los productos vía firestore

    useEffect(() => {
        const db = getFirestore();

        const producto = doc(db, "items", "wNxtCoMdwVEO2HQxl3CC");
        
        getDoc(producto).then(resultado => {
            if(resultado.exists()){
                setItems({id:resultado.id, ...resultado.data()})
            }else{
                console.error("No se ha encontrado el producto")
            }
            // console.log("ID Producto: " + resultado.id);
            // console.log(resultado.data());
        })

    })



    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={items.imagen} alt={items.titulo} className="img-fluid"/>
                </div>
                <div className="col-md-4">
                    <h2>{items.titulo}</h2>
                    <p>${items.precio}</p>
                    
                </div>
                     {/* <ItemList productos ={items} />  */}

            </div>
        </div>
    )
}
export default ItemListContainer;