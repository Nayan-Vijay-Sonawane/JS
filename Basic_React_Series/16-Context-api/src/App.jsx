import { useContext } from 'react';
import './App.css'; 
import Button from './components/Button';
import Navbar from './components/Navbar';
import { ThemeDataContext } from './context/ThemeContext';
  
function App() {

  const [theme] = useContext(ThemeDataContext)

  return (
    <div className='h-screen bg-cyan-950'>
      <div className={theme}>
        <Navbar />
        <Button />
      </div>
    </div>
  )
};

export default App;
 
