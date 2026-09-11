import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className='h-screen'>
      <h1 className='flex justify-center items-center'>Theme is {theme}</h1>
      <div>
        
      </div>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App;
