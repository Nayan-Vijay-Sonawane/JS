import {useState, useEffect} from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // function to fetch users
    const fetchUsers = async() => {
        try{
            setLoading(false);
            setError(null);

            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if(!response.ok){
                throw new Error("Failed to fetch users");
            }

            const data = await response.json();
            setUsers(data);
        }
        catch(err){
            setError(err.message);
            setUsers([]);
        }
        finally{
            setLoading(false);
        }
    }
}