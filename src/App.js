import { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import TaskItem from "./components/TaskItem/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, value: "eat lunch" },
    { id: 2, value: "go shopping" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };


  const addTask = () => {
    const copy = [...tasks]
    copy.push({id: new Date(), value: inputValue})
    setTasks(copy)
  }
  return (
    
    <div className="App">
      <h2>Get things done!</h2>
      <Form 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onChange={onChange}
        buttonValue="Add task" 
        placeholder="What is the task today?"
        onClick={addTask}
        />
      
      {tasks.map((task) => {
        return <TaskItem key={task.id } task={task} tasks={tasks} setTasks={setTasks} />;
      })}
    </div>
  );
}
