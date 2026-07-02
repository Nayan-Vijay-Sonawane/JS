import { useState } from 'react';
import './App.css'

function App() {

  const [title, setTitle] = useState('');

  const submitHandler = (e) =>{
    // preveting default behaviour of form (reloading)
    e.preventDefault();
    console.log('Form submitted by', title);
    // Value in the input box is empty 
    setTitle('');
  }

  return (
    <div className='h-screen w-full bg-blue-950 flex flex-col justify-center items-center gap-10'>
      <form onSubmit={(e) => {submitHandler(e)}} className='flex flex-col gap-10 items-start'>
        <input 
        type="text" 
        placeholder='Enter your name'
        // Bind the input's value to state
        value={title} 
        // Updates the state whenever the user types
        onChange={(e) => setTitle(e.target.value)}
        className='bg-gray-400 w-full px-6 py-2.5 rounded-sm' />
        <button className='bg-gray-500 px-2 py-1.5 w-fit rounded-md text-white cursor-pointer'>submit</button>
      </form>

    </div>
  )
}

export default App
