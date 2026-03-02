import { useEffect, useState } from "react";
import { fetchTasks } from "./taskService";

function TaskList(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks()
            .then(data => {
                setTasks(data);
                setLoading(false);
            });
    }, []);

    if(loading) return <p>Loading...</p>;

    return(
        <div>
            <h2>Your Tasks</h2>
            {tasks.map(task => (
                <div key={task.id}>
                    {task.title}
                </div>
            ))}
        </div>
    );
}

export default TaskList;