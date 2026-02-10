import { useState } from 'react';
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LogInBtn from './components/LogInBtn';

function App() {
  
  const [isLoggedIn, setLoggedIn] = useState(true);

  // Logical operator
  return (
  
    <div>
      <h1>This is the new advance react app</h1>
      {isLoggedIn && <LogoutBtn/>}
    </div>
  )

  // // Ternary operator
  // return (
  //   <div>
  // {isLoggedIn ? <LogInBtn/> : <LogoutBtn/>}
  //   </div>
  // )


  // If-Else conditions
    // if(isLoggedIn){
    //   return (
    //     <LogoutBtn/>
    //   )
    // }
    // else{
    //   return(
    //     <LogInBtn/>
    //   )
    // }
  
}

export default App;
