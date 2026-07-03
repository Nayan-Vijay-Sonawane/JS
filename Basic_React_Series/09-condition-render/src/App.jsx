import { useState } from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  // If-else
  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn />
  //   )
  // }
  // else{
  //   return (
  //     <LoginBtn />
  //   )
  // }

  return (
    <div className='bg-blue-950 h-screen p-5 text-white flex justify-center items-center gap-10'>
       {/* Ternery operator */}
       {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    </div>
  )
}

export default App
