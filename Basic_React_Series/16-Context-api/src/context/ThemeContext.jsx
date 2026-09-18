import { createContext, useContext } from "react";

export const ThemeDataContext = useContext();

const ThemeContext = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
};
 
export default ThemeContext;