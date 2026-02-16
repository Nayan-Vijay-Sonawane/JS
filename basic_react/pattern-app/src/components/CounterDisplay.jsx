// Display the count only

function CounterDisplay({count}) {
    
    console.log("Counter Display rendered");

    return(
        <div>
            <h1>Current Count: {count}</h1>
        </div>
    )

}

export default CounterDisplay;