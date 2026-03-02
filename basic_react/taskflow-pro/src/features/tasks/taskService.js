import api from "../../services/apiClient";

export const fetchTasks = async () => {
    const response = await api.get("/todo?_limit=10");
    return response.data;
};

export const deleteTask = async (id) => {
    await api.delete(`/todos/${id}`);
}
