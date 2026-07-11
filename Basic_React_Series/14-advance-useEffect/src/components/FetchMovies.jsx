import { useState, useEffect } from "react";

const FetchMovies = () => {

    fetch('https://jsonlint.com/datasets/movie-genres')
        .then(respnse => respnse.json())
        .then(setData(data))

    return (
        
    )
}

export default FetchMovies;
