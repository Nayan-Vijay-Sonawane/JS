import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count+1);
  }

  // Variation-1 (runs on every render)
  useEffect(() => {
    alert("Runs on every render");
  });

  // Variation-2 (runs only once(on Mount))


  return (
    <div>
      <h2>Count is : {count}</h2>
      <button onClick={handleCount} className='bg-black rounded px-5 py-2 text-white cursor-pointer active:scale-95'>Click Me</button>
    </div>
  )
}

export default App
