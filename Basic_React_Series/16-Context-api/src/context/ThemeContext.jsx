import { createContext } from 'react'

export const PostDataContext = createContext();

const ThemeContext = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
};
 
export default ThemeContext;