import './App.css'

function App() {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <div className='h-screen w-full bg-black text-white p-10'>
      <form onSubmit={(e) => submitHandler(e)} className='flex flex-col justify-between items-start gap-4 w-1/2 p-10'>
        <input type="text" placeholder='Enter notes heading' className='px-5 w-full py-2 font-medium border-2 outline-none rounded' />
        <textarea type="text" placeholder='Write details' className='px-5 w-full h-32 font-medium py-2 border-2 outline-none rounded' />
        <button className='bg-white text-black px-5 w-full py-2 outline-none font-medium rounded cursor-pointer'>Add Note</button>
      </form>
      <div className='flex flex-wrap p-10'>
        <div className='h-32 w-32 rounded-2xl bg-white'>
        </div>
      </div>

    </div>
  )
}

export default App
