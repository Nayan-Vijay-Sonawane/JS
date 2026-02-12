import {useState, useEffect} from 'react';

function Dependency() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounted");
    }, [count])

    return(
        <>
        <h1>This is the counter app</h1>
        <button onClick={() => {setCount(count + 1)}}>Count : {count}</button>
        </>
    )
}

export default Dependency;