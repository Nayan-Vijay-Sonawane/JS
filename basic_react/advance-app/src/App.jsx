// import { useState } from 'react';
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LogInBtn from './components/LogInBtn';
import NumberList from './components/NumberList';

function App() {
  
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // if(!isLoggedIn){
  //   return (
  //     <LogInBtn/>
  //   )
  // }

  // // Logical operator
  // return (
  //   <div>
  //     <h1>This is the new advance react app</h1>
  //     {isLoggedIn && <LogoutBtn/>}
  //   </div>
  // )

  // // Ternary operator
  // return (
  //   <div>
  // {isLoggedIn ? <LogInBtn/> : <LogoutBtn/>}
  //   </div>
  // )


  // // If-Else conditions
  //   if(isLoggedIn){
  //     return (
  //       <LogoutBtn/>
  //     )
  //   }
  //   else{
  //     return(
  //       <LogInBtn/>
  //     )
  //   }

    <NumberList/>
  
}

export default App;
