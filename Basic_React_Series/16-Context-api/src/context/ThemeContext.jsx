import { createContext } from 'react'

const ThemeDataContext = createContext();

const ThemeContext = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ThemeContext;