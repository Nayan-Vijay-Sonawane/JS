

const RightCardContent = (props) => {
    return (
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className="bg-white rounded-full flex justify-center items-center w-12 h-12 text-xl font-semibold">{props.id+1}</h2>
            <div>
                <p className="text-lg text-shadow-2xs text-white mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi eligendi aliquid dolores ipsam velit.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className="text-white font-medium px-8 py-2 rounded-full">{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className="text-white font-medium px-4 py-2 rounded-full"><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent;