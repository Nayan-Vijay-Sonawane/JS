import { useState } from 'react';
import Colorswitch from './components/Colorswitch';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);

  const getRandomColor = () => {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
  }

  const handleChangeColor = () => {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomColor();
  }

  return (
    <div className='bg-gray-700 h-screen flex justify-center items-center text-white text-2xl'>
      <Colorswitch onChangeColor={handleChangeColor}/>
    </div>
  )
}

export default App
