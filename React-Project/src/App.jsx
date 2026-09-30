
import { useState } from "react";
import "./App.css";

import Header from "./Components/header";
import Footer from "./Components/footer";
import TaskForm from "./Components/taskForm";
import TaskList from "./Components/taskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app">
      <Header title="Task Management App" />

      <section className="stats">
        <div className="stat-card">
          <span className="stat-number">{totalTasks}</span>
          <span className="stat-label">Total Tasks</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">{completedTasks}</span>
          <span className="stat-label">Completed</span>
        </div>

        <div className="stat-card">
          <span className="stat-number">{pendingTasks}</span>
          <span className="stat-label">Pending</span>
        </div>
      </section>

      <TaskForm
        placeholder="Enter task title"
        buttonText="Add Task"
        onAddTask={addTask}
      />

      <TaskList
        title="My Tasks"
        message="No tasks yet. Add your first task!"
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />

      <Footer
        year="2026"
        appName="Task Management App"
      />
    </div>
  );
}

export default App;