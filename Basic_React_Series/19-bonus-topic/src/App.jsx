import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App;
