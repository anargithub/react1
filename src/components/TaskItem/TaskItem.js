import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsChevronCompactLeft, BsTrash } from "react-icons/bs";
import Form from "../Form/Form";
import "./TaskItem.css"

export default function TaskItem({ task, tasks, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onEditTask = (id) => {
    setIsEditing(false)
    // change tasks from App.js and change the value of task by its id
    // 1. copy tasks state from App.js
    // 2. find index of current task by its id
    // 3. change the value of current task in copy of tasks, using finded index
    // 4. using setTasks from App.js replace the current tasks with its created copy
    const copy = [...tasks]
    const index = copy.findIndex(task => task.id === id);
    copy[index] = { ...copy[index], value: inputValue };
    setTasks(copy);
    
  }

  const onDelete = (id) => {
    // change the tasks state from App.js and delete current task by its id
    // 1. copy tasks state from App.js
    // 2. filter the copy, such that the current task will not be included in result
    // 3. using setTasks from App.js replace the current tasks with its created copy
    const copy = [...tasks]
    const result = copy.filter(task => task.id !== id);
    setTasks(result)
    

  }

  if (isEditing) {
    return (
      <Form
        buttonValue="Update task"
        placeholder="Update task"
        inputValue={inputValue}
        onChange={onChange}
        onClick={() => {onEditTask(task.id)}}
      />
    );
  }
  return (
    <div className="taskItem" >
      {task.value}
      <div className="task_item__icons">
        <AiOutlineEdit onClick={() => setIsEditing(true)} />
        <BsTrash onClick={() => {onDelete(task.id)}} />
        
      </div>

    </div>
  );
}
