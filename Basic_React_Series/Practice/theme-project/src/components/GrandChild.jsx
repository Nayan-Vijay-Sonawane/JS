import { useContext } from "react";
import ThemeContext from '../context/ThemeContext';

const GrandChild = () => {

    const theme = useContext(ThemeContext);

    return (
        <div className='h-screen bg-mauve-500 text-white p-10'>
            <button className='bg-mauve-800 px-5 py-2 rounded cursor-pointer active:scale-95'>Click Me</button>
        </div>
    )
}

export default GrandChild;