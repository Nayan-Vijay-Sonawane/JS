import api from "../../services/apiClient";

export const fetchTasks = async () => {
    const response = await api.get("/todo?_limit=10");
    return response.data;
};

export const createTask = async (title) => {
    const res = await api.post("/todos", {
        title,
        completed: false,
    });
    return res.data;
}

export const deleteTask = async (id) => {
    await api.delete(`/todos/${id}`);
}
