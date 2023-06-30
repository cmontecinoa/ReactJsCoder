import Item from "./Item";

const ItemList = ({ productos }) => {



    return (
        <>
            {productos.map(producto =>
                <Item key={producto.id} producto={producto}></Item>
            )}
        </>
    )
}

export default ItemList;