import facebookImg from "./images/facebook.svg";
import instagramImg from "./images/instagram.svg";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-dark">
            <div className="row py-3">
                <div className="col-md-3">
                    <h5>Buscar Tienda</h5>
                </div>
                <div className="col-md-3">
                    <h5>Ayuda</h5>
                </div>
                <div className="col-md-3">
                    <h5>Sobre Nosotros</h5>
                </div>
                <div className="col-md-3">
                    <h5>Nuestras Redes</h5>
                    <a><img className="img-fluid" src={facebookImg} width={32}></img></a>
                    <a><img className="img-fluid" src={instagramImg} width={32}></img></a>
                </div>

            </div>
        </div>
    )
}

export default Footer;