import './App.css'

function App() {

  // to store the value
  localStorage.setItem("user", "Nayan");

  // to get the value (display)
  const user = localStorage.getItem("user");
  console.log(user);

  // to remove the value
  localStorage.removeItem("user");

  // storing object
  const obj1 = {
    name: "Nayan",
    age: 25,
    isStudent: true
  }

  // since the localstorage only stores strings to need to convert this into string
  localStorage.setItem("obj1", JSON.stringify(obj1));

  const userString = JSON.parse(localStorage.getItem("obj1"));
  console.log(userString);

  localStorage.clear();

  return (
    <div className='h-screen flex justify-center items-center bg-black text-white p-10 '>
      Local Storage
    </div>
  )
}

export default App;
