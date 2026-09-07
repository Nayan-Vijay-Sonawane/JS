import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {
                navigate('/')
            }} className='bg-emerald-800 px-4 py-2 m-2 cursor-pointer active:scale-95 rounded'>
                Return to Home Page
            </button>
            <button onClick={() => {
                navigate(-1)
            }} className='bg-emerald-800 px-4 py-2 m-2 cursor-pointer active:scale-95 rounded'>
                Back
            </button>
            <h1 className='font-bold'>About Page</h1>
        </div>
    )
};

export default About;
