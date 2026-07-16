import './App.css'
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Parent from './components/Parent';

function App() {
  const [theme, setTheme] = useState('light');

  return (

    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='h-screen p-10 bg-gray-400'>
        <div className={`${theme === 'light' ? 'bg-amber-100' : 'bg-black'} h-100 w-100 border-2 border-black flex flex-col justify-center items-center`}>
          <Parent />
        </div>
      </div>

    </ThemeContext.Provider>

    // <div className='h-screen bg-mauve-500 text-white p-10'>
    //   <button className='bg-mauve-800 px-5 py-2 rounded cursor-pointer active:scale-95'>Click Me</button>
    // </div>
  )
};

export default App;
