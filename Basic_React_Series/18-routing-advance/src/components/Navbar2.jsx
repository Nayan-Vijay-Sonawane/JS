import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

    const navigate = useNavigate();
 
    return (
        <div className='py-1 px-4 bg-cyan-800'>
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
            <button onClick={() => {
                navigate(+1)
            }} className='bg-emerald-800 px-4 py-2 m-2 cursor-pointer active:scale-95 rounded'>
                Next
            </button>
        </div>
    )
}

export default Navbar2;