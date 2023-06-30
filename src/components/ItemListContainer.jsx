import { useState , useEffect } from "react";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
// import productos from "./json/productos.json";
// import { useParams } from "react-router-dom";

//Firestore
// import { doc, getDoc, getFirestore} from "firebase/firestore";
import { collection, getDocs, getFirestore} from "firebase/firestore";


const ItemListContainer = () => {


    const [items, setItems] = useState([]);
    // const {id} = useParams();




//Accediendo a la collection de productos u items vía firestore

    useEffect(() => {
        const db = getFirestore();
        const itemsCollectionDB = collection(db, "items");
        // const producto = doc(db, "items", "wNxtCoMdwVEO2HQxl3CC");
        
        getDocs(itemsCollectionDB).then(resultado => {
            setItems(resultado.docs.map(producto =>({id:producto.id, ...producto.data()})));
            console.log(resultado);
            // console.log("ID Producto: " + resultado.id);
            // console.log(resultado.data());
        })

    },[]);



    return (
        <div className="container my-5">
            <div className="row">
                
                     <ItemList productos ={items} />

            </div>
        </div>
    )
}
export default ItemListContainer;