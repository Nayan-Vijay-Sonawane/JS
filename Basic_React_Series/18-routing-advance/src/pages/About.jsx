import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();
    const btnClicked = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={btnClicked} className='bg-emerald-800 px-4 py-2 m-2 cursor-pointer active:scale-95 rounded'>Return to Home Page</button>
            <h1 className='font-bold'>About Page</h1>
        </div>
    )
};

export default About;
