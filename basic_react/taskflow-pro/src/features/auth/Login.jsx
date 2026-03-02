import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Login(){
    const [email, setEmail] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email);
        navigate("/dashboard");
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </form>

            <p>
                No account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default Login;
