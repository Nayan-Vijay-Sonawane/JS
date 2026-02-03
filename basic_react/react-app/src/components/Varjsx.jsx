function Varjsx() {
    const name = "Nayan";
    const age = 25;

    return(
        <div>
            <h1>Hello {name}</h1>
            <p>Age: {age}</p>
        </div>
    )
}

export default Varjsx;

/*

// This will fail because JSX needs one parent
return (
    <h1>Hello</h1>
    <p>Welcome</p>
)

// To fix this we can use 
return (
    <>
    <h1>Hello</h1>
    <p>Welcome</p>
    </>
)
*/