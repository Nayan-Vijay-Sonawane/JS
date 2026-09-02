import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="py-5 px-8 bg-cyan-950 flex justify-between items-center font-semibold ">
            <h2 className="text-xl font-bold">Furn-Tech</h2>
            <div className="flex gap-8">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>      
    )   
};       

export default Navbar;
