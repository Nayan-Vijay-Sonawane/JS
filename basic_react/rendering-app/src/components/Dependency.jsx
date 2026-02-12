import {useEffect} from 'react';

function Dependency() {

    useEffect(() => {
        console.log("Mounted");
    }, [])
}

export default Dependency;