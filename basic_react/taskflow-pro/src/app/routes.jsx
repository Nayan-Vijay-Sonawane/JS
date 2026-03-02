import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import TaskList from "../features/tasks/TaskList";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    
    return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route 
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <TaskList/>
                    </ProtectedRoute>
                }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}