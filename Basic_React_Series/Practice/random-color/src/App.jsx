import { useState } from 'react';
import Colorswitch from './components/Colorswitch';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClickOutside = () => {
    setClicks(c => c + 1);
  }

  const getRandomColor = () => {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());

    return `rgb(${r}, ${g}, ${b})`;
  }

  const handleChangeColor = () => {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomColor();
  }

  return (
    <div onClick={handleClickOutside} className='bg-gray-500 h-[100%] w-[100%] flex flex-col justify-center items-center text-white text-2xl m-5 p-5'>
      <Colorswitch onChangeColor={handleChangeColor}/>
      <br />
      <br />
      <h2 className=''>Clicks on the page: {clicks}</h2>
    </div>
  )
}

export default App;
