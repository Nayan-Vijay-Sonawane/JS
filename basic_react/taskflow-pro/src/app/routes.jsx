import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/Login";
import Dashboard from "../features/tasks/TaskList";
import { useAuth } from "../context/AuthContext";
import { Children } from "react";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/" />;
};

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route 
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>
                }
                />
        </Routes>
    );
}