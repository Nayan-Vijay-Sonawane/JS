import './App.css'
import Profile from './components/Profile';
import Counter from './components/Counter';
import NewEvents from './components/NewEvents';

function App() {

  return (
    <>
      <Profile name="Nayan" role="Developer" />
      <Counter/>
      <NewEvents/>
    </>
  )
}

export default App
