import { createContext } from 'react';


const ThemeContext = (props) => {
    return (
        <div>
            <PostDataContext.Provider value='Nayan'>
                {props.children}
            </PostDataContext.Provider>
        </div>
    )
};
 
export default ThemeContext;