
const Card = (props) => {
    return (
        <div className="flex flex-col gap-10">
            <input type="text" onChange={(e) => props.setName(e.target.value)} className='bg-gray-400 p-2 rounded-xl' />
            <h1>The value of Name state variable inside card: {props.title} {props.name}</h1>
        </div>
    )
}

export default Card;