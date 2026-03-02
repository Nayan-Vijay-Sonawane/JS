import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Register() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return(
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );
}

export default Register;