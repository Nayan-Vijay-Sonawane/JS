import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar2 = () => {

    const [theme, setTheme] = useContext(ThemeDataContext);    

    return (
        <div className='flex gap-10 text-xl font-semibold'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <h4>{theme}</h4>
        </div>
    ) 
};

export default Navbar2;