import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Work Meeting",
      day: "Feb 7th at 12:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Dinner Date",
      day: "Jan 10th at 8:00pm",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Save Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header onShowAddTask={() => setShowAddTask(!showAddTask)} showingAddTask={showAddTask}/>
      {showAddTask && <AddTask onSave={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "There are no tasks in me"
      )}
    </div>
  );
}

export default App;
