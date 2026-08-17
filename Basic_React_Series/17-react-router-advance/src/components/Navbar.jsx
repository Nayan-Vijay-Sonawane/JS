const Navbar = () => {  
 return ( 
    <div className='bg-cyan-800 flex justify-between items-center font-semibold px-2 py-4'>
                <h2>New Website</h2>
                <div className='flex gap-40'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div> 
 )  
};

export default Navbar;

