import { useState } from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if(!isLoggedIn){
    return (
      <LoginBtn />
    )
  }

  // Logical operator
  return (
    <div className='bg-blue-950 h-screen p-5 text-white flex flex-col justify-center items-center gap-10'>
      <h1>Welcome Everyone to this Project</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )

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

  // return (
  //   <div className='bg-blue-950 h-screen p-5 text-white flex justify-center items-center gap-10'>
  //      {/* Ternery operator */}
  //      {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )
}

export default App
