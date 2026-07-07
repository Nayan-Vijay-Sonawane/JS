import './App.css'

function App() {

  // API calling using Fetch API
  // const getData = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  //   const data = await res.json()
  //   console.log(data);
  // }

  

  return (
    <div className='h-screen bg-gray-950 text-white flex justify-center items-center'>
      <button onClick={getData} className='px-5 py-2 bg-gray-600 cursor-pointer active:scale-95 rounded'>Get Data</button>
    </div>
  )
}

export default App;
