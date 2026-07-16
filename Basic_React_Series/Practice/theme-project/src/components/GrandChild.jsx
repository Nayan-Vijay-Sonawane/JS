import { useContext } from "react";
import ThemeContext from '../context/ThemeContext';

const GrandChild = () => {

    const theme = useContext(ThemeContext);

    return (
        <div className='h-screen bg-mauve-500 text-white p-10'>
            <div className="h-100 w-100 border-2 border-black flex flex-col justify-center items-center">
                <button className='bg-mauve-800 px-5 py-2 rounded cursor-pointer active:scale-95'>Change Theme</button>
            </div>
        </div>
    )
}

export default GrandChild;