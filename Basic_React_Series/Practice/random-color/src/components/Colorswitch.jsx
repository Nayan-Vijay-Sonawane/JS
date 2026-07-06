
const Colorswitch = ({onChangeColor}) => {
    return(
        <div>
            <button onClick={(e) => {
                e.stopPropagation();
                onChangeColor();
            }} >
                Change color
            </button>
        </div>
    )
}

export default Colorswitch;