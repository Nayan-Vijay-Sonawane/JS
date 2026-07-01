const Button = (props) => {
    return (
        <div className="bg-blue-950 h-screen flex flex-col justify-center items-center gap-10">
            {props.children}
            <button onClick={props.handleClick} className="bg-gray-500 px-4 py-2 cursor-pointer rounded-2xl">
                {props.text}
            </button>
        </div>
    )
}

export default Button;