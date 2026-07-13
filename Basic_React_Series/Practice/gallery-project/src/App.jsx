import axios from 'axios';
import { useState } from 'react';
import './App.css'

function App() {

  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30');
    console.log(response.data);
    setUserData(response.data);
  }

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt='' />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto bg-black flex flex-col text-white gap-5 p-4'>

      <button
        onClick={getData}
        className='bg-green-700 text-white w-fit cursor-pointer active:scale-95 px-5 py-2 rounded '>
        Get Data
      </button>
      <div className='flex gap-4 flex-wrap rounded-xl'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
