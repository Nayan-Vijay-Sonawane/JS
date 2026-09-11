
const Navbar = (props) => {

    const changeTheme = () => {
        props.setTheme('Dark');
    }

    return (
        <div className="m-5">
            <button className='px-5 py-2 bg-cyan-950 text-white rounded active:scale-95 cursor-pointer' onClick={changeTheme}>Change theme</button>
        </div>
    )
};

export default Navbar;