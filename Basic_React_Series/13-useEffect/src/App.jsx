import { useState, useEffect } from 'react'
import './App.css'
import LogerComponent from './components/LogerComponent';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import MultiEffectComponent from './components/MultiEffectComponent';

function App() {

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  const handleCount = () => {
    setCount(count+1);
  }

  const handleCountTotal = () => {
    setTotal(total+1);
  }

  // Variation-1 (runs on every render)
  // useEffect(() => {
  //   alert("Runs on every render");
  // });

  // Variation-2 (runs only once(on Mount))
  // useEffect(() => {
  //   alert("Runs only once");
  // }, []);

  // Vairation-3 (runs when a value changes)
  // useEffect(() => {
  //   alert("Runs everytime when the count is updated");
  // }, [count]);

  // Variation-4 (multiple dependencies)
  // useEffect(() => {
  //   alert("Runs everytime when the count/total is updated")
  // }, [count, total])


  // return (
  //   <div className='p-5 h-screen flex flex-col justify-center items-center gap-5'>
  //     <h2>Count is : {count}</h2>
  //     <button onClick={handleCount} className='bg-black rounded px-5 py-2 text-white cursor-pointer active:scale-95'>Update Count</button>
      
  //     <h2>Total is : {total}</h2>
  //     <button onClick={handleCountTotal} className='bg-black rounded px-5 py-2 text-white cursor-pointer active:scale-95'>Update Total</button>
  //   </div>
  // )

  return (
    <div>
      {/* <LogerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      <MultiEffectComponent />
    </div>
    
  )
}

export default App;
