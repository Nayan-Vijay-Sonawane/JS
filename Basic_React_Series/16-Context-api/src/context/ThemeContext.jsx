import { createContext, useContext } from "react";

export const ThemeDataContext = useContext();

const ThemeContext = (props) => {
    return (
        <div>
            <ThemeDataContext.Provider>
                {props.Children}
            </ThemeDataContext.Provider>
        </div>
    )
};
 
export default ThemeContext;