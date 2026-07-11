import './App.css'
import { useState, useEffect } from 'react';

function App() {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("Value of A is changing...");
  }, [a])

  useEffect(() => {
    console.log("Value of B is changing...");
  }, [b])
 

  return ( 
    <div className='h-screen bg-black text-white flex flex-col gap-5 justify-center items-center'>
      <div className='flex gap-17'>
        <h1 className='text-3xl text-emerald-50'>A is {a}</h1>
        <h2 className='text-3xl text-emerald-50'>B is {b}</h2>
      </div>
      <div className='flex gap-10'> 
        <button onClick={() => { setA(a + 1) }} className='px-5 py-2 rounded cursor-pointer active:scale-95 bg-gray-500 text-white'>Change A</button>
        <button onClick={() => { setB(b - 1) }} className='px-5 py-2 rounded cursor-pointer active:scale-95 bg-gray-500 text-white'>Change B</button>
      </div> 
    
    </div> 
  )
}

export default App
