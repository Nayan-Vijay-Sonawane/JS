import './App.css'
import Profile from './components/Profile';
import Counter from './components/Counter';
import NewEvents from './components/NewEvents';
import MyButton from './components/MyButton';

function App() {

  return (
    <>
      <Profile name="Nayan" role="Developer" />
      <Counter/>
      <NewEvents/>
      <MyButton/>
    </>
  )
}

export default App
