from fastapi import FastAPI

app = FastAPI()

tasks = []

@app.get("/")
def home():
    return {"message": "Welcome to Todo API"}

@app.post("/tasks")
def create_task(task: dict):
    task["id"] = len(tasks) + 1
    task["status"] = "pending"
    tasks.append(task)
    return {"message": "Task created successfully", "task": task}

@app.get("/tasks")
def get_tasks():
    return {"tasks": tasks}

@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    for task in tasks:
        if task["id"] == task_id:
            tasks.remove(task)
            return {"message": "Task deleted successfully"}
    return {"error": "Task not found"}

@app.put("/tasks/{task_id}")
def update_task(task_id: int, updated_task: dict):
    for task in tasks:
        if task["id"] == task_id:
            task["title"] = updated_task.get("title", task["title"])
            task["description"] = updated_task.get("description", task["description"])
            return {"message": "Task updated successfully", "task": task}
    return {"error": "Task not found"}

@app.patch("/tasks/{task_id}/done")
def mark_task_done(task_id: int):
    for task in tasks:
        if task["id"] == task_id:
            task["status"] = "done"
            return {"message": "Task marked as done", "task": task}
    return {"error": "Task not found"}