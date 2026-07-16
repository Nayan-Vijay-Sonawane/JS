import Child from "./Child";
import { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

const GrandChild = () => {

    const theme = useContext(ThemeContext);

    return (
        <div>
            {theme}
        </div>
    )
}

export default GrandChild;