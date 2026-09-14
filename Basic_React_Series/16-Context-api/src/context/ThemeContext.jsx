import { creatContext } from 'react'

const ThemeContext = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default ThemeContext;