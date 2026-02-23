import {useState} from 'react';

function Login(){
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email.includes("@")){
            setError("Invalid Email");
            return;
        }
        console.log("Submitted: ", email);
    }
}

export default Login;