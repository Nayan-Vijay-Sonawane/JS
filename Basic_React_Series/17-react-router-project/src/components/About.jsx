import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/dashboard'); 
    }
    
    return (
        <div>
        <div className="text-2xl font-bold text-amber-50 p-10 flex justify-center items-center">
            About Page
        </div>
        <button 
        onClick={handleClick}
        className='bg-amber-50 text-black rounded px-5 py-2 cursor-pointer active:scale-95'>
            Move to Dashboard
        </button>
        </div>
    )

};

export default About;
