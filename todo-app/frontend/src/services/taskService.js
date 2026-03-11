const API_URL = "http://127.0.0.1:8000/tasks";

export const getTasks = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.tasks;
};
export const createTask = async (task) => {
    const response = await fetch("http://127.0.0.1:8000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });

    return response.json();
};
export const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
        method: "DELETE",
    });
};
export const markTaskDone = async (id) => {
    await fetch(`http://127.0.0.1:8000/tasks/${id}/done`, {
        method: "PATCH",
    });
};
export const updateTask = async (id, task) => {
    await fetch(`http://127.0.0.1:8000/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
};