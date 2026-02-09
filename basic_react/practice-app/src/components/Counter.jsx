import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    console.log("Rendered");

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