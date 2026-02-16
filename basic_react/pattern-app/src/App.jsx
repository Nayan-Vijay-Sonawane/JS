import {useState} from 'react';
import './App.css'
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

function App() {

  const [count, setCount] = useState(0);
  console.log("App rendered");

  return (
    <div>
      <CounterDisplay count={count}/>
      <CounterButtons count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
