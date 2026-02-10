import { useState } from 'react';
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LogInBtn from './components/LogInBtn';

function App() {
  
  const [isLoggedIn, setLoggedIn] = useState(true);

  // Ternary operator
  return (

    <div>
  {isLoggedIn ? <LogInBtn/> : <LogoutBtn/>}
    </div>
  )


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
