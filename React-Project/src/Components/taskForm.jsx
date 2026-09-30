
import { useState } from "react";

function TaskForm({ placeholder, buttonText, onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
      priority: priority,
      dueDate: dueDate,
      completed: false
    };

    onAddTask(newTask);

    setTitle("");
    setCategory("");
    setPriority("Medium");
    setDueDate("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="task-title">
          Task Title
        </label>

        <input
          id="task-title"
          className="task-input"
          type="text"
          placeholder={placeholder}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="priority">
          Priority
        </label>

        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="due-date">
          Due Date
        </label>

        <input
          id="due-date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>

      <button
        className="add-task-btn"
        type="submit"
      >
        {buttonText}
      </button>

    </form>
  );
}

export default TaskForm;
