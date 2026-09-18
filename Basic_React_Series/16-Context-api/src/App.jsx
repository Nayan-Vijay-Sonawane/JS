import './App.css';
import Navbar from './components/Navbar';
 
function App() {
  
  return (
    <div className='h-screen bg-cyan-950'>
      <Navbar theme={theme}>
        <h2>This is Navbar</h2>
      </Navbar>
    </div>
  )
};

export default App;
