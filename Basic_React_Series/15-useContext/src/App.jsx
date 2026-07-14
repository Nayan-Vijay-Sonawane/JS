import './App.css'
import Parent from './components/Parent';
import UserContext from './context/UserContext';
function App() {

  return (
    <div className='bg-black h-screen text-white'>
      {/* Step-2 : Wrap the childs inside a provider */} 
      {/* Step-3 : pass the value */}
      <UserContext.Provider value="Nayan">
        <Parent />
      </UserContext.Provider>
    </div>
  )
}

export default App
