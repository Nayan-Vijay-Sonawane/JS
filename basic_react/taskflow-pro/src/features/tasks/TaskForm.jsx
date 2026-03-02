import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

function TaskForm({ onCreate }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title) return;
        onCreate(title);
        setTitle("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <Input
                placeholder="New task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button type="submit">Add Task</Button>
        </form>
    );
}

export default TaskForm;