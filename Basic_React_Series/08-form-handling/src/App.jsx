import './App.css'

function App() {

  return (
    <div className='h-screen w-full bg-blue-950 flex flex-col justify-center items-center gap-10'>
      <form className='flex flex-col gap-10'>
        <input type="text" placeholder='Enter your name' className='bg-gray-400 px-8 py-2.5' />
        <button className='bg-gray-500 px-2 py-1.5 rounded-md text-white cursor-pointer'>submit</button>
      </form>

    </div>
  )
}

export default App
