import { useState, useEffect } from "react";

function Fetchapi() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch("API_URL");
                const data = await res.json();
                setData(data);
            }
            catch(err){
                setError("Failed to fetch", err);
            }
        };

        fetchData();
    }, [])

    return(
        <div>
            <h2>API Data Fetch Example</h2>
            {error && <p>{error}</p>}
            {data && <p>{data}</p>}
        </div>
    )
}

export default Fetchapi;