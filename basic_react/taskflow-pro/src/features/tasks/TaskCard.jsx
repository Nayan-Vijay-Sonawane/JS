import Button from "../../components/Button";

function TaskCard({ task, onDelete }){
    return(
        <div className="task-card">
            <p>{task.title}</p>
            <Button onClick={() => onDelete(task.id)}>Delete</Button>
        </div>
    );
}

export default TaskCard;