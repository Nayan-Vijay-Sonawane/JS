const Navbar = () => {
    return (
        <div className="py-4 px-8 flex justify-between">
            <h2>Furn-Tech</h2>
            <div className="flex gap-8">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    ) 
};

export default Navbar;