import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'

function App() {

  const [theme, setTheme] = useState('Light');

  return (
    <div className='h-screen bg-cyan-950'>
      <Navbar theme={theme}>
        <h2></h2>
      </Navbar>
    </div>
  )
}

export default App;
