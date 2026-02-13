import {useState, useEffect} from 'react';

function UserList() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // function to fetch users
    const fetchUsers = async() => {
        try{
            setLoading(false);
            setError(null);
        }
    }
}