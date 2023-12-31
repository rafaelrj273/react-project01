import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title={`Titulo`} />
        <TaskList title="Fazendo" />
        <TaskList title="Completo" />
      </div>
    </div>
  );
}
