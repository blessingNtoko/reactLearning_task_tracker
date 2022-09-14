import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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
  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
