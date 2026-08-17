import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';

function App() { 
    return (
        <div className='bg-black text-white'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
};

export default App;