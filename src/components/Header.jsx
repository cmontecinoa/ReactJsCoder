import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import logo from "./images/logo.png";

const Header = () => {
    
    return (
        <div className="container-fluid">
            <div className="row bg-light">
                <div className="col-md-4">
                    <a href="#"> <img src={logo} alt="logoBullSmoke" width="215px"/> </a>

                </div>
                <div className="col-md-8 text-end">
                    <a href ="#" className="text-dark">Buscar tienda </a>|
                    <a href ="#" className="text-dark"> Ayuda</a>
                </div>
            </div>
        
            
                <div className="row text-center bg-danger">
                    <div className="col-md-4" alt="BrandsContainer">Brands </div>

                    <div className="col-md-4" alt="NavContainer"><NavBar/></div>

                    <div className="col-md-4" alt="CartWidgetContainer"><CartWidget/> </div>

                 </div>
             
        </div>
    )
}

export default Header;