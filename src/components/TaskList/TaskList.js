import TaskItem from "../TaskItem/TaskItem";

export default function TaskList ({tasks, setTasks}) {
    return (
      <div>
         {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          );
        })}
      </div>
       
      
    );
  }
