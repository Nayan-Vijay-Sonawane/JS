import './App.css'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <h1>Theme is light</h1>
    </div>
  )
}

export default App;
