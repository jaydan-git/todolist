import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Task from "./Task.jsx";
import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <TaskForm/>
            <TaskList/>
        </StrictMode>
    )
