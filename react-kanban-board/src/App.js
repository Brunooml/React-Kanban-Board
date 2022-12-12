import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import TaskList from "./components/taskList/TaskList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TaskList title="Pendente"/>
      <TaskList title="Fazendo"/>
      <TaskList title="Completa"/>
    </div>
  );
}

export default App;
