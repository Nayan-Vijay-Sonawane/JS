import Navbar2 from "./Navbar2";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-5 py-4 bg-cyan-800 text-white">
            <h1 className="text-3xl font-bold">Furn-tech</h1>
            <Navbar2 />
        </div>
    )
};

export default Navbar;
