import './App.css'
// import Card from './components/Card';
import {Routes, Route} from 'react-router-dom' 
import Home from './pages/Home';

function App() { 
   
  return (
    <div className='h-screen bg-black text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div> 
  )  
};
  
export default App;

