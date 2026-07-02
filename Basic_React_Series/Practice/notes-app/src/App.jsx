import './App.css'

function App() {

  return (
    <div className='h-screen w-full bg-black text-white'>
      <form className='flex justify-between items-start gap-10 p-10'>
        <div className='flex items-start flex-col'>
          <input type="text" placeholder='Enter notes heading' className='px-5 w-1/2 py-2 border-2 rounded' />
          <input type="text" placeholder='Write details' className='px-5 w-1/2 h-18 py-2 border-2 rounded' />
          <button className='bg-white text-black px-5 w-1/2 py-2 cursor-pointer'>Add Note</button>
        </div>
        <img className='h-80' src="https://static.vecteezy.com/system/resources/thumbnails/051/865/736/small_2x/yellow-post-it-note-with-thumbtack-isolated-on-transparent-background-png.png" alt="" />
      </form>
    </div>
  )
}

export default App
