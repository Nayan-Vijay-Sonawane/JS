import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('')

  return (
    <div className='bg-blue-950 text-white h-screen flex flex-col justify-center items-center gap-10'>
      <Card title="card-1" name={name} setName={setName}/>
      <Card title="card-2" name={name} setName={setName}/>

      {/* Changes made in child component and it reflects in parent component */}
      <p>Inside parent component and the value of name is: {name}</p>
    </div>
  )
}

export default App
