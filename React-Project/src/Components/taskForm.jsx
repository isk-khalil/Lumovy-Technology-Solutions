function TaskForm({ buttonText, placeholder }) {
  return (
    <form>
      <input type="text" placeholder={placeholder} />
      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default TaskForm;