
const Colorswitch = ({onChangeColor}) => {
    return(
        <div>
            <button onClick={(e) => {
                // Stops the event from propagating to parent elements.
                e.stopPropagation();
                onChangeColor();
            }} 
            className="bg-gray-800 px-5 py-2 rounded active:scale-95 cursor-pointer"
            >
                Change color
            </button>
        </div>
    )
}

export default Colorswitch;