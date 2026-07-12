import axios from 'axios';
import './App.css'

function App() {

  const getData = () => {
    axios.get()
  }

  return (
    <div className='h-screen bg-black text-white flex justify-center items-center'>

      <button
        onClick={getData}
        className='bg-green-700 text-white cursor-pointer active:scale-95 px-5 py-2 rounded '>
        Get Data
      </button>
    </div>
  )
}

export default App
