import {useState} from 'react';
import './App.css'
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';
import UseFetch from './components/UseFetch';

function App() {

  const [count, setCount] = useState(0);
  console.log("App rendered");

  const {data, loading} = UseFetch("API_URL");
  if(loading) return <p>Loading...</p>;

  return (
    <div>
      <CounterDisplay count={count}/>
      <CounterButtons count={count} setCount={setCount}/>
      {data.length}
    </div>
  );
}

export default App;
