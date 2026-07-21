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
        <button>
            Move to Dashboard
        </button>
        </div>
    )

};

export default About;
