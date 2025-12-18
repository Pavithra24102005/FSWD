import { useState } from "react";

export default function TaskListDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      {/* FULL PAGE CSS */}
      <style>{`
        html, body, #root {
          height: 100%;
          margin: 0;
        }

        body {
          background: linear-gradient(135deg, #143014ff, #265524ff);
          font-family: Arial, sans-serif;
        }

        .dashboard {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .task-container {
          background: #ffffff;
          width: 400px;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .title {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .task-input {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .task-input input {
          flex: 1;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .add-btn {
          background: #4facfe;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
        }

        .add-btn:hover {
          background: #3b8fd8;
        }

        .task-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .task-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          margin-bottom: 10px;
          background: #f4f6f8;
          border-radius: 5px;
        }

        .remove-btn {
          background: #ff4d4d;
          border: none;
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
        }

        .remove-btn:hover {
          background: #d93636;
        }

        .empty-text {
          text-align: center;
          color: #777;
        }
      `}</style>

      {/* JSX */}
      <div className="dashboard">
        <div className="task-container">
          <h2 className="title">Task List Dashboard</h2>

          <div className="task-input">
            <input
              type="text"
              placeholder="Enter a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="add-btn" onClick={addTask}>
              Add
            </button>
          </div>

          {tasks.length === 0 ? (
            <p className="empty-text">No tasks added yet</p>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  <span>{task.text}</span>
                  <button
                    className="remove-btn"
                    onClick={() => removeTask(task.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
