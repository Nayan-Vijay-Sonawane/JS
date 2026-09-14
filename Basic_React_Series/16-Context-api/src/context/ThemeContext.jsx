import { createContext } from 'react'

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ThemeContext;