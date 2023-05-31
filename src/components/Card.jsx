
function Card({ imagen }) {
    return (
        //idea: repetir en cascada el brand en el fondo de la card en escalas de grises
        <div className="card text-center">
            <img src={imagen} className="card-img-top" alt="Card_ItemList"/>
            <div className="card-body">
                <h4 className="card-title">Titulo</h4>
                <p className="card-text text-danger">Descripción del artículo</p>
                <a href="/" className="btn btn-outline-secondary">Agregar al carro</a>
            </div>
        </div>
    )

}

export default Card;