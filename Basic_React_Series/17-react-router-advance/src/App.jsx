import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <div className='flex justify-between items-center font-semibold px-2 py-4'>
                <h2>New Website</h2>
                <div className='flex gap-40'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
};

export default App;