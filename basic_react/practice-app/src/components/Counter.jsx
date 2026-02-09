import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    console.log("Rendered");

    useEffect(() => {
        alert("This is the first page");
    }, [count])

    return (
        <button onClick={() => {setCount(count + 1)}}>
            {count}
        </button>
        
    );
}
export default Counter;

/*
    With Each Click
        - State updates
        - Component re-renders
        - UI updates
*/