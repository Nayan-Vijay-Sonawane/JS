const Navbar = () => {
    return (
        <div className="py-4 px-8 bg-cyan-950 flex justify-between">
            <h2 className="text-xl font-bold">Furn-Tech</h2>
            <div className="flex gap-8">
                <a className="text-lg font-bold" href="/">Home</a>
                <a className="text-lg font-bold" href="/about">About</a>
                <a className="text-lg font-bold" href="/contact">Contact</a>
            </div>
        </div>
    ) 
};

export default Navbar;