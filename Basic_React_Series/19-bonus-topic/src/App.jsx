import './App.css'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div>
      <h1>Theme is {theme}</h1>
    </div>
  )
}

export default App;
