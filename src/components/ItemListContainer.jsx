import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


//Imports Descontinuados
// import ItemCount from "./ItemCount";
// import productos from "./json/productos.json";
// import { useParams } from "react-router-dom";


//Firestore
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";



const ItemListContainer = () => {


    const [items, setItems] = useState([]);
    const {id} = useParams();

    //Accediendo a la collection de productos u items vía firestore

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
            } else {
                console.error("Error! No se encontraron productos en la colección");
            }
        })

        // getDocs(itemsCollectionDB).then(resultado => {
        //     setItems(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })));
        //     console.log(resultado);
        // })

    }, [id]);

    // Cargando Archivos DB

    // useEffect(() =>{
    //     const db = getFirestore();
    //     const itemsCollection = collection (db, "items");

    //     productos.forEach( producto => {
    //         addDoc(itemsCollection, producto);
    //     });

    //     console.log("Productos Cargados en el FireStore");

    // },[]);



    return (
        <div className="container my-5">
            <div className="row">

                <ItemList productos={items} />

            </div>
        </div>
    )
}
export default ItemListContainer;