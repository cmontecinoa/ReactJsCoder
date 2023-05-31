import CartWidget from "./CartWidget";
const NavBar = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-dark " href="/">Destacados</a>
                </li> 
                <li className="nav-item"> 
                    <a className="nav-link text-dark" href="/">SnapBacks</a>
                </li> 
                <li className="nav-item"> 
                    <a className="nav-link text-dark" href="/">StreetWear</a>
                </li> 
                <li className="nav-item"> 
                    <a class="nav-link text-dark" href="/">Calzado</a>
                </li>
                <li className="nav-item"> 
                    <CartWidget/>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;