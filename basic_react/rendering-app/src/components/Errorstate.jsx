// Loading and Error States

import {useState, useEffect} from 'react';

function Errorstate () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json)
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Something went wrong", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )

}

export default Errorstate;