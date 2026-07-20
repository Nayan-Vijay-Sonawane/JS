import { useNavigate } from "react-router-dom"; 
 
const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about');
    }

    return (
        <div>
        <div className="text-2xl font-bold p-10 flex justify-center items-center">
            Home Page
        </div>
        <button 
        onClick={handleClick}
        className="bg-amber-50 text-black px-5 py-2 rounded active:scale-95 cursor-pointer">
            Move to about page
        </button>
        </div>
    )
}

export default Home;
