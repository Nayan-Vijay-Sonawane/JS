
const Colorswitch = ({onChangeColor}) => {
    return(
        <div>
            <button onClick={(e) => {
                // Stops the event from propagating to parent elements.
                // stop an event from bubbling up (or capturing down) the DOM tree. 
                // It prevents parent elements from receiving the same event after a child element handles it.
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