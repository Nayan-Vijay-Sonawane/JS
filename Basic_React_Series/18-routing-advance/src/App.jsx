import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </div>
  ) 
}
 
export default App
