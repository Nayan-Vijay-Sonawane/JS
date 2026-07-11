import { useState, useEffect } from "react";

const FetchMovies = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonlint.com/datasets/movie-genres')
        .then(respnse => respnse.json())
        .then(data => 
            setData(data)
        )
    })

    return (
        <div>
            <h1>New fetch</h1>
            <p>{data.map(data)}</p>
        </div>
        
    )
}

export default FetchMovies;
