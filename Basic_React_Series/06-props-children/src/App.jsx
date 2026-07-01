import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  }

  return (
    <div className='h-screen w-full text-white bg-blue-950 flex flex-col gap-10 jutstify-center items-center'>
      
      {/* <Card name="Nayan">
        <h1>New Course</h1>
        <p>This is the new course</p>
        <p>Completing this soon</p>
      </Card> */}

      {/* Props as children */}
        <Button handleClick={handleClick} text="Click Me">
          <h1 className='text-white text-5xl'>{count}</h1>
        </Button>
    </div>

  )
}

export default App
