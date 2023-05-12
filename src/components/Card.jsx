
function Card({ imagen }) {
    return (
        <div className="card text-center">
            <img src={imagen} alt="Card_ItemList" />
            <div className="card-body">
                <h4 className="card-title">Titulo</h4>
                <p className="card-text text-danger">Descripción del artículo</p>
                <a href="#" className="btn btn-outline-secondary">Agregar al carro</a>
            </div>
        </div>
    )

}

export default Card;