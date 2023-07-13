import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <>
            <div className="col-md-6 my-3">
                <div className="card border-0" >
                    <Link to ={"/item/" + producto.id} className="text-decoration-none text-dark itemHover">
                    <img className="card-img-top" src={producto.imagen} alt={producto.titulo} />
                    <div className="card-body">
                        <h3 className="card-title">{producto.titulo}</h3>
                        <p className="card-text"><span className="text-secondary">{producto.descripcion}</span> </p>
                        <p className="card-text">${producto.precio} </p>
                    </div>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Item;