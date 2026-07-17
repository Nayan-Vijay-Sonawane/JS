import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

// Creates router object
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home />
    },
    {
      path:"/about",
      element: <About />
    },
    {
      path:"/dashboard",
      element: <Dashboard />
    }
  ]
)

function App() {

  return (
    <div className='bg-slate-800 h-screen'>
      App
    </div>
  )
}

export default App
