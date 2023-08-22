import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, value: "eat lunch" },
    { id: 2, value: "go shopping" },
  ]);
  
  return (
    
    <div className="App">
      <h2>Get things done!</h2>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      {/* {tasks.map((task) => {
        return <TaskItem key={task.id } task={task} tasks={tasks} setTasks={setTasks} />;
      })} */}
    </div>
  );
}
