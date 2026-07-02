import { useState } from 'react';
import './App.css'

function App() {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    // prevent default behaviour of form (reloading)
    e.preventDefault();
    
    // create a copy array
    const copyTask = [...task];
    // add title and details
    copyTask.push({title, details});
    // replace the copy array in thr original one
    setTask(copyTask);

    // Value in the input box will empty after clicking the button
    setTitle('');
    setDetails('');
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
          // Bind the inpt value to the state
          value={title}
          //update the state whenever the use types
          onChange={(e) =>{
            setTitle(e.target.value)
          }}
        />

        {/* Second input for details */}
        <textarea
          type="text"
          placeholder='Write details here'
          className='px-5 w-full h-32 font-medium py-2 border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}

        />
        <button className='bg-white text-black px-5 w-full py-2 active:scale-95 outline-none font-medium rounded cursor-pointer'>
          Add Note
        </button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes </h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className='relative h-52 w-40 rounded-xl bg-cover text-black py-8 px-4 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/037/152/671/small_2x/sticky-note-paper-background-free-png.png")] '>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-semibold text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default App
