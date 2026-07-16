import { useContext } from "react";
import ThemeContext from '../context/ThemeContext';

const GrandChild = () => {

    const theme = useContext(ThemeContext);

    return (
        <div className="p-10">
            {theme}
        </div>
    )
}

export default GrandChild;