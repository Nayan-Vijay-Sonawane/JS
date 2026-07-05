
import './App.css'

function App() {

  const handleClick = () => {
    alert("I am clicked")
  }


  return (
    <div className='bg-blue-950 h-screen flex justify-center items-center text-white'>
      <button onClick={handleClick} className='bg-gray-500 px-5 py-2 rounded active:scale-95 cursor-pointer'>Click Me</button>
    </div>
  )
}

export default App
