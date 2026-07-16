import { useContext } from "react";
import ThemeContext from '../context/ThemeContext';

const GrandChild = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }

    return (
            <div>
                <button onClick={handleClick} className='bg-mauve-800 text-white px-5 py-2 rounded cursor-pointer active:scale-95'>Change Theme</button>
            </div>
    )
}

export default GrandChild;