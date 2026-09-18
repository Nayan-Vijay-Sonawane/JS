import { createContext } from "react";
import useState from 'react';

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')

    return (
        <div>
            <ThemeDataContext.Provider value={[theme,setTheme]}>
                {props.Children}
            </ThemeDataContext.Provider>
        </div>
    )
};
 
export default ThemeContext;