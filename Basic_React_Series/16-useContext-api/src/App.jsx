import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen flex justify-between px-5 py-2'>
      <Navbar />
      <Navbar2 />
    </div>
  )
}

export default App
