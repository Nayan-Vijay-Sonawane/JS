import { createContext, useContext } from "react";

export const ThemeDataContext = useContext();

const ThemeContext = (props) => {
    return (
        <div>
            <ThemeDataContext.Provider>
                
            </ThemeDataContext.Provider>
        </div>
    )
};
 
export default ThemeContext;