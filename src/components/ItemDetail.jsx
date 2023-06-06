import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                  

                </div>
                <div className="col-md-3">
                    <h3>{producto.titulo}</h3>
                    <h3>{producto.descripcion}</h3>
                    <h3><b>${producto.precio}</b></h3>
                    <ItemCount stock={producto.stock}/>
                
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;