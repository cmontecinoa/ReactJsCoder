import facebookImg from "./images/facebook.svg";
import instagramImg from "./images/instagram.svg";

const Footer = () => {
    return (
        <div className="container-fluid text-light bg-dark">
            <div className="row">
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
                    <div className="redes">
                    <a href="/"><img className="img-fluid" alt="Fb" src={facebookImg} width={32}></img></a>
                    <a href="/"><img className="img-fluid" alt ="Ig" src={instagramImg} width={32}></img></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;