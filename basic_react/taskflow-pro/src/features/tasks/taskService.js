import api from "../../services/apiClient";

const fetchTasks = async () => {
    const response = await api.get("/todo?_limit=5");
    return response.data;
};

export default fetchTasks;