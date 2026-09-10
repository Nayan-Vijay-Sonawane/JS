
const Navbar = () => {

    const changeTheme = (props) => {
        console.log("theme change", props)
    }

    return (
        <div>
            <button onClick={changeTheme}>Change theme</button>
        </div>
    )
};

export default Navbar;