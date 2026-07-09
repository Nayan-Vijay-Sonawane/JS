import { useState, useEffect } from "react";

const LogerComponent = () => {

    const [count,setCount] = useState(0);

    // Runs on every render
    useEffect(() => {
        console.log("Component rendered or count changed:", {count});
    })

    return (
        <div className="h-screen flex flex-col gap-5 justify-center items-center">
            <h1 className="text-bold">Count is {count}</h1>
            <button onClick={() => {setCount(count+1)}}>Increment</button>
        </div>
    )
}

export default LogerComponent;