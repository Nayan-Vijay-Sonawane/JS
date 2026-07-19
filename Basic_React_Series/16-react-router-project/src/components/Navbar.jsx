import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className="flex justify-evenly">
                <li><NavLink to='/' > 
                Home
                </NavLink>
                </li>
                <li><NavLink to='/about' > 
                About
                </NavLink>
                </li>
                <li><NavLink to='/dashboard' > 
                Dashboard
                </NavLink>
                </li>
            </ul>

        </div>
    )
};

export default Navbar;