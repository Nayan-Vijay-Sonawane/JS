import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'

function App() {

  return (
    <div className='h-screen flex justify-between px-8 py-3 bg-cyan-950'>
      <Navbar />
      <Navbar2 />
    </div>
  )
}

export default App;
