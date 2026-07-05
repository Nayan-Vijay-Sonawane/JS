
import './App.css'

function App() {

  const handleClick = () => {
    alert("I am clicked")
  }

  const handleMouseover = () => {
    alert("Mouse over on para")
  }

  const handleInputChange = () => {

  }


  return (
    <div className='bg-blue-950 h-screen flex flex-col gap-5 justify-center items-center text-white'>

    <form>
      <input type="text" onChange={handleInputChange} />
    </form>

      <p onMouseOver={handleMouseover} className='border p-3'>I am a paragraph</p>
      <button onClick={handleClick} className='bg-gray-500 px-5 py-2 rounded active:scale-95 cursor-pointer'>Click Me</button>
    </div>
  )
}

export default App
