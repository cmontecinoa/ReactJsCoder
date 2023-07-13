import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div >
            <ul className="nav justify-content-center ">
                <li className="nav-item">
                    {/* a revisar activeClassName="selected" */}
                    <NavLink className="nav-link text-dark"  to={"/destacados"}> Destacados </NavLink> 
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark"  to={"/categoria/snapbacks"}> SnapBacks </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark"  to={"categoria/streetwear"}> StreetWear </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark"  to={"categoria/calzado"}> Calzado </NavLink>
                </li>
                <li className="nav-item">
                    <CartWidget />
                </li>
            </ul>
        </div>
    )
}

export default NavBar;