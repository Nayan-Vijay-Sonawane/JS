
import './App.css'

function App() {

  // const handleClick = () => {
  //   alert("I am clicked")
  // }

  // const handleMouseover = () => {
  //   alert("Mouse over on para")
  // }

  const handleInputChange = (e) => {
    // console.log("Value changes in the input field");
    console.log("value till now:", e.target.value);
  }

  const handleSubmit = (e) => {
    // preveting default behaviour of form (reloading)
    e.preventDefault();
    // Writing a custom behaviour
    alert("can I submit the form!");
  }


  return (
    <div className='bg-blue-950 h-screen flex flex-col gap-5 justify-center items-center text-white'>

      {/* Rather than directly invoking the function we can write in an arrow function or simply give the reference of the function made */}

    <form className='flex flex-col gap-5' onSubmit={(e) => {handleSubmit(e)}}>
      <input type="text" onChange={handleInputChange} className='bg-gray-400 rounded border-none p-3' />
      <button type="submit" className='bg-gray-500 px-5 py-2 rounded active:scale-95 cursor-pointer'>Submit</button>
    </form>

      {/* <p onMouseOver={handleMouseover} className='border p-3'>I am a paragraph</p>
      <button onClick={handleClick} className='bg-gray-500 px-5 py-2 rounded active:scale-95 cursor-pointer'>Click Me</button> */}
    </div>
  )
}

export default App
