import {useState, useEffect} from 'react';
import localData from './dataone.json';

function Onmount() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(dataone => setUsers(dataone));
    }, []);

    return(
        <div>
            <h2>User List</h2>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )

}

export default Onmount;

/*

- component renders
- useEffect runs (because of [])
- API call happens
- setUsers() update state
- 

*/