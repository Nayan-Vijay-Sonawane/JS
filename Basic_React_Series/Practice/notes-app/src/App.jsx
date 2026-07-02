import { useState } from 'react';
import './App.css'

function App() {

  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle('');
  }

  return (
    <div className='h-screen bg-black lg:flex  text-white'>
      <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-start gap-4 lg:w-1/2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes </h1>

        {/* First input for heading */}
        <input
          type="text"
          placeholder='Enter notes heading'
          className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
          value={title}
          onChange={(e) =>{
            setTitle(e.target.value)
          }}
        />

        {/* Second input for details */}
        <textarea
          type="text"
          placeholder='Write details'
          className='px-5 w-full h-32 font-medium py-2 border-2 outline-none rounded'
        />
        <button className='bg-white text-black px-5 w-full py-2 outline-none font-medium rounded cursor-pointer'>
          Add Note
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Your Notes </h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
          <div className='h-52 w-40 rounded-2xl bg-white'></div>
        </div>
      </div>

    </div>
  )
}

export default App
