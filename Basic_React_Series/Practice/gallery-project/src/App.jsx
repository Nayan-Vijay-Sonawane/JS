import axios from 'axios';
import { useState } from 'react';
import './App.css'

function App() {

  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=${index}&limit=15');
    console.log(response.data);
    setUserData(response.data);
  }

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div>
        <div className='h-40 w-44 bg-white'>
          <img className='h-full object-cover' src={elem.download_url} alt='' />
        </div>
        <h2>{elem.author}</h2>
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto bg-black text-white gap-10 p-4'>

      <button
        onClick={getData}
        className='bg-green-700 text-white cursor-pointer active:scale-95 px-5 py-2 rounded '>
        Get Data
      </button>
      <div className='flex gap-4 flex-wrap'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
