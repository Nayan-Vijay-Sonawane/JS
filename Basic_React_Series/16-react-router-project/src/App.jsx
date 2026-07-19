import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';

// Creates router object  
const router = createBrowserRouter( 
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar />
        <About />
      </div>
    },
    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar />
        <ParamComp />
      </div>
    }
  ]
);

function App() {

  return (
    <div className='bg-slate-800 h-screen text-white p-10'>
      <RouterProvider router={router} />
    </div>
  )
};

export default App;
