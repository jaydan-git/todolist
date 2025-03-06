import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from "./task/TaskList.jsx"
import TaskForm from "./task/TaskForm.jsx";


function App() {
  return (
    <div className="App">
      <TaskForm/>
      <TaskList/>
    </div>
  )
}
export default App
