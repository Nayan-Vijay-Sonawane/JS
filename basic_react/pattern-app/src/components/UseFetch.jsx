import {useState, useEffect} from 'react';

function UseFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json)
            . then(result => {
                setData(result);
                setLoading(false);
            });
    }, [url]);

    return {data, loading}

}

export default UseFetch;