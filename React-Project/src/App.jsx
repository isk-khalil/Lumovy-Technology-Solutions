import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <Header title="Task Management App" />

      <TaskForm
        placeholder="Enter a task"
        buttonText="Add Task"
      />

      <TaskList
        title="My Tasks"
        message="No tasks yet."
      />

      <Footer
        year="2026"
        appName="Task Management App"
      />
    </div>
  );
}

export default App;