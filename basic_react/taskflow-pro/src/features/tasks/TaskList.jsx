import { useEffect, useState } from "react";
import { deleteTask, fetchTasks } from "./taskService";
import Loader from "../../components/Loader";
import TaskCard from "./TaskCard";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";

function TaskList(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { logout } = useAuth();

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try{
            const data = await fetchTasks();
            setTasks(data);
        }
        catch(err){
            setError("Failed to load tasks", err);
        }
        finally{
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    if(loading) return <Loader />;
    if(error) return <p>{error}</p>

    return(
        <div>
            <h2>Dashboard</h2>
            <Button onClick={logout}>Logout</Button>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default TaskList;