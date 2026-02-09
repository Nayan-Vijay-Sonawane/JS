// Inline events
{/* <button onClick={() => { alert("Button is clicked")}}>Click</button> */}

function NewEvents() {
    const ClickMe = () => {
        console.log("Clicked");
    }
    return (
        <div>
            <button onClick={ClickMe}>Click</button>
            <button onClick={() => { alert("Button is clicked")}}>Click</button>
        </div>
        
    )
}

export default NewEvents;