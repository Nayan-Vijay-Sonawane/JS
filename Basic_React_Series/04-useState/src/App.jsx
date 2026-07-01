import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increaseNum = () => {
    setCount(count+1);
  }

  const decreaseNum = () => {
    setCount(count-1);
  }

  return (
    <div className='h-screen width-full bg-blue-950 text-white flex flex-col justify-center items-center gap-10'>
      <h1 className='bg-gray-500 text-9xl w-fit px-10 py-5 rounded-md'>{count}</h1>
      <div className='flex gap-10'>
        <button onClick={increaseNum} className='bg-gray-600 px-4 py-3 cursor-pointer rounded-sm text-white'>Increase</button>
        <button onClick={decreaseNum} className='bg-gray-600 px-4 py-3 cursor-pointer rounded-sm text-white'>Decrease</button>
      </div>
    </div>
  )
}

export default App
