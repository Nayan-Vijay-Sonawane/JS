import { useState, useEffect } from "react";

const DataFetcher = () => {

    const [data, setData] = useState(0);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setloading(false);
            });
    }, []);

    return (
        <div className="h-screen flex flex-col gap-5 justify-center items-center p-10 mt-5">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DataFetcher;