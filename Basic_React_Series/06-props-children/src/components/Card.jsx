
const Card = (props) => {
    return (
        <div className='flex flex-col gap-6 jutstify-center items-center'>
            {props.children}
        </div>
    )
}

export default Card;