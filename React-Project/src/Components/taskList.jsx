
function TaskList({
  title,
  message,
  tasks,
  onDeleteTask,
  onToggleTask
}) {
  return (
    <section className="task-list">

      <div className="task-list-header">
        <h2>{title}</h2>

        <span className="task-count">
          {tasks.length} tasks
        </span>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>{message}</p>
        </div>
      ) : (
        <div className="task-cards">

          {tasks.map((task) => (
            <div
              className={`task-card ${
                task.completed ? "completed" : ""
              }`}
              key={task.id}
            >

              <div className="task-content">

                <h3>{task.title}</h3>

                <div className="task-details">

                  {task.category && (
                    <span className="task-category">
                      {task.category}
                    </span>
                  )}

                  <span
                    className={`priority priority-${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                  {task.dueDate && (
                    <span className="due-date">
                      Due: {task.dueDate}
                    </span>
                  )}

                </div>
              </div>

              <div className="task-actions">

                <button
                  className="complete-btn"
                  onClick={() => onToggleTask(task.id)}
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => onDeleteTask(task.id)}
                >
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  );
}

export default TaskList;
