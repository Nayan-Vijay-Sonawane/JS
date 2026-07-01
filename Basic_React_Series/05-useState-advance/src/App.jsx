import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState({ user:"Sarthak",  age: 26});
  const [count, setCount] = useState(0);

  const btnClicked = () =>{
    const newNum = {...num};
    newNum.user = "Nayan";
    newNum.age = 25;
    setNum(newNum);

    // Batch update
    setCount(count+1);
    setCount(prev => (prev+1));
  }

  return (
    <div className='h-screen bg-mauve-400 flex flex-col justify-center items-center gap-10 font-serif'>
      <h1 className='bg-black w-fit text-8xl text-white'>{num.user}  {num.age}  {count}</h1>
      <button onClick={btnClicked} className='bg-gray-600 px-4 py-1.5 rounded-md text-white cursor-pointer'>Click</button>
    </div>
  )
}

export default App
