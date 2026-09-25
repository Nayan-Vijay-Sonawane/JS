import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext);

    const changeTheme = () => {
        setTheme('Dark')
    }

    return (
       <div>
        <button onClick={changeTheme} className="m-5 px-5 py-2 bg-cyan-500 rounded active:scale-95 cursor-pointer">Change Theme {theme}</button>
       </div> 
    )
};

export default Button;
