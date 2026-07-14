import './App.css'
import { useState } from 'react';
import Parent from './components/Parent';
import UserContext from './context/UserContext';
function App() {
  const [user, setUser] = useState({name: "Nayan"})

  return (
    <div className='bg-black h-screen text-white p-5'>
      {/* Step-2 : Wrap the childs inside a provider */} 
      {/* Step-3 : pass the value */}
      <UserContext.Provider value={user}>
        <Parent />
      </UserContext.Provider>
    </div>
  )
}

export default App
