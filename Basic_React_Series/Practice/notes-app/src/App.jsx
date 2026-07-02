import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <form>
        <input type="text" placeholder='Enter notes heading ' />
        <textarea placeholder='Enter Details' name='' id=''></textarea>
      </form>
    </div>
  )
}

export default App
 