import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import TaskList from "./components/taskList/TaskList";

let idAcc = 0;
const idGenerator = () => {
  idAcc += 1
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: idGenerator(),
      title,
      state,
    };
    setTasks((currentTask) => {
        return [ ...currentTask, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if(task.id === id){
          return { ...task, title, state }
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
        return currentTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <TaskList title="Pendente" onAddTask={ addTask } tasks={ tasks.filter(task => task.state === 'Pendente') } onTaskUpdate={ updateTask } taskState="Pendente" onDeleteTask={ deleteTask }/>
      <TaskList title="Fazendo" onAddTask={ addTask } tasks={ tasks.filter(task => task.state === 'Fazendo') } onTaskUpdate={ updateTask } taskState="Fazendo" onDeleteTask={ deleteTask }/>
      <TaskList title="Completa" onAddTask={ addTask } tasks={ tasks.filter(task => task.state === 'Completa') } onTaskUpdate={ updateTask } taskState="Completa" onDeleteTask={ deleteTask }/>
    </div>
  );
};

export default App;
