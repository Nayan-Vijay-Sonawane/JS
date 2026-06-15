const RightCard = () => {
    return (
        <div className="h-full overflow-hidden relative rounded-4xl w-80 ">
            <img h-full w-full object-cover src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
            <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
                <h2 className="bg-white rounded-full flex justify-center items-center w-13 h-13 text-2xl font-semibold">1</h2>
                <div>
                    <p className="text-lg leading-normal text-white mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi eligendi aliquid dolores ipsam velit.</p>
                    <div className="flex justify-between">
                        <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">Satisfied</button>
                        <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full"><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard;