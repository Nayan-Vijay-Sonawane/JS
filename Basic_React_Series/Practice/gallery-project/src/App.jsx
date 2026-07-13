import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card';

function App() {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  useEffect(() => {
    getData();
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {

      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='h-screen overflow-auto bg-black flex flex-col text-white gap-5 p-4'>
      <div className='flex h-[82%] gap-4 flex-wrap rounded-xl'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button
        style={{opacity: index ==1 ? 0.5 : 1}}
          className='bg-green-700 text-sm cursor-pointer active:scale-95 text-white rounded px-5 py-2 font-semibold'
          onClick={() => {
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }}
          >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className='bg-green-700 text-sm cursor-pointer active:scale-95 text-white rounded px-5 py-2 font-semibold'
          onClick={() => {
            setUserData([])
            setIndex(index+1)
          }}
          >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
