
const Navbar = (props) => {

    const changeTheme = () => {
        props.setTheme('Dark');
    }

    return (
        <div className="m-5">
            <button className='px-5 py-2 bg-cyan-950 text-white rounded cursor-pointer active:scale-95' onClick={changeTheme}>Change theme</button>
        </div>
    )
};

export default Navbar;