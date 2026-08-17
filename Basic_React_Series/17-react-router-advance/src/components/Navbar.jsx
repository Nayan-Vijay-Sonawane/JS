import { Link } from 'react-router-dom';

const Navbar = () => {  
 return ( 
    <div className='bg-cyan-800 flex justify-between items-center font-semibold px-5 py-5'>
                <h2 className='font-bold '>New Website</h2>
                <div className='flex gap-40'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div> 
 )  
};

export default Navbar;

