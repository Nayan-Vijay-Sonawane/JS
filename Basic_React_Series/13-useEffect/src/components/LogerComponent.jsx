import { useState, useEffect } from "react";

const LogerComponent = () => {

    const [count,setCount] = useState(0);

    // Runs on every render
    useEffect(() => {
        console.log("Component rendered or count changed:", count);
    })

    return (
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
            <h1 className="font-bold">Count is {count}</h1>
            <button onClick={() => {setCount(count+1)}} className="bg-black rounded px-5 py-2 text-white cursor-pointer active:scale-95">Increment</button>
        </div>
    )
}

export default LogerComponent;