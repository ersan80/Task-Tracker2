import "./App.css";
import Header from "./components/Header";

import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const[showAddTask,setShowAddTask]= useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);

  // *   DELETE TASK

  const deleteTask = (id) => {
    console.log("deletetassk", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //* ADD TASK

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 100 + 1);
    const addNewTask = { id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  //* TOGGLE DONE

  const toggleDone = (toggleDoneId) => {
    console.log("double", toggleDoneId);

    setTasks(
      tasks.map((item) =>
        item.id === toggleDoneId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  // *TOGGLE SHOW

  const toggleShow = () =>{

    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header title="TASK TRACKER" showAddTask="showAddTask" toggleShow="toggleShow"></Header>
      {showAddTask&&<AddTask addTask={addTask}></AddTask>}
      {
        tasks.length >0 ?(<>
      
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        toggleDone={toggleDone}
      ></Tasks></>):(<p style={{textAlign:"center"}}>No Task To Show</p>)}
    </div>
  );
}

export default App;
