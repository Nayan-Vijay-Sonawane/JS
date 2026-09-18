import { createContext } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')

    return (
        <div>
            <ThemeDataContext.Provider>
                {props.Children}
            </ThemeDataContext.Provider>
        </div>
    )
};
 
export default ThemeContext;