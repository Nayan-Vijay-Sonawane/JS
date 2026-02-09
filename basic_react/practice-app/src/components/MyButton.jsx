function MyButton() {
    function handleClick(event){
        console.log(event.type);
        console.log(event.nativeEvent);
    }
    return (
        <button onClick={handleClick}>Click Me</button>
    )
}

export default MyButton;



// // Passing argument to event handler
// function MyButton(props) {
//     function handleClick(id){
//         alert(`Button ${id} is clicked`);
//     }

//     return(
//         <button onClick={() => {handleClick(props.id)}}>Click Me</button>
//     )
// }

// export default MyButton;

