import { useState, useEffect } from "react";

const DataFetcher = () => {

    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
 
    // Runs only on first render
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setloading(false)
            });
    }, []);

    return (
        <div className="min-h-screen p-5 ">
            {loading ? (
                <h1 className="text-2xl font-bold">Loading...</h1>
            ) : (
                <ul>
                    {data.map(post => (
                        <li className={'list-disc pl-6 space-y-2'} key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DataFetcher;