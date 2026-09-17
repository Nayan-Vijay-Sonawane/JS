import { createContext } from 'react'

export const PostDataContext = createContext();

const ThemeContext = (props) => {
    return (
        <div>
            <PostDataContext.Provider>
                {props.}
            </PostDataContext.Provider>
        </div>
    )
};
 
export default ThemeContext;