import { createContext } from "react";

export const ThemeDataContext = createContext();

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