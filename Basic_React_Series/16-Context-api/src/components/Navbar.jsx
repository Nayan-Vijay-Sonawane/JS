import Navbar2 from "./Navbar2";
import { useContext } from 'react'
import {ThemeDataContext} from '../context/ThemeContext'

const Navbar = (props) => {
    
    const data = useContext(ThemeDataContext);

    return (
        <div className="flex justify-between items-center px-5 py-4 bg-cyan-800 text-white">
            <h1 className="text-3xl font-bold">Furn-tech</h1>
            <Navbar2 theme={props.theme} />
        </div>
    )
};

export default Navbar;
