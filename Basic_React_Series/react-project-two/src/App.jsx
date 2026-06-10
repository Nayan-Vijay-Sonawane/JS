import UserCard from "./components/UserCard"
import './App.css';
function App() {

  return (
    <div className="container">
      <h1>Component</h1>
      <UserCard name="Ratan Tata" desc="Description of Ratan Tata"/>
      <UserCard name="Ratan Tata" desc="Lorem ipsum dolor dolor"/>
      <UserCard name="Newton" desc="reprehenderit necessitati"/>
    </div>
  ) 
}

export default App
