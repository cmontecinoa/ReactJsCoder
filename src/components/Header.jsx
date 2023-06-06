
import NavBar from "./NavBar";
import logo from "./images/logo.png";
import adidasBrand from "./images/adidasBrand.png";
import nikeBrand from "./images/nikeBrand.png";
import nbaBrand from "./images/nbaBrand.png";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <div className="container-fluid">
            <div className="row bg-light">
                <div className="col-md-4">
                    <Link to="/"> <img src={logo} alt="logoBullSmoke" width="215px"/> </Link>

                </div>
                <div className="col-md-8 text-end">
                    <Link to ="/" className="text-dark">Buscar tienda </Link>|
                    <Link to ="/" className="text-dark"> Ayuda</Link>
                </div>
            </div>
        
            
                <div className="row bg-danger">
                    <div className="col-md-3" alt="BrandsContainer">
                    <img className="brands" src={adidasBrand} alt="logoAdidas" width="50px"/>
                    <img className="brands" src={nikeBrand} alt="logoNike" width="50px"/>
                    <img className="brands" src={nbaBrand} alt="logoNike" width="25px"/>
                    </div>
                    

                    <div className="col-md-9 my-2" alt="NavContainer"><NavBar/></div>

                 </div>
             
        </div>
    )
}

export default Header;