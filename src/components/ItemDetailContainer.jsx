import { useEffect, useState } from "react";
import productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = productos.find(item => item.idx === 3);
                // setItem(producto);
                resolve(producto);

            }, 2000);
        });

        promesa.then( data => {
            setItem(data);
            // console.log(data);
        })

    }, []);

    return (
        <>
          <ItemDetail producto={item}/>
        </>
    )
}

export default ItemDetailContainer;