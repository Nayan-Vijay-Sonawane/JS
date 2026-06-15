const RightCard = () => {
    return (
        <div className="h-full overflow-hidden relative rounded-4xl w-80 ">
            <img h-full w-full object-cover src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
            <div className="absolute top-0 left-0 h-full w-full bg-amber-300 p-6">
                <h2>1</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi eligendi aliquid dolores ipsam velit.</p>
                    <button>Satisfied</button>
                    <button><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCard;