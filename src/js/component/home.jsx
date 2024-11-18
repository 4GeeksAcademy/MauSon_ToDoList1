import React, { useState } from "react";
import Task from "./Task";

const Home = () => {
	const [taskArray, setTaskArray] = useState([]); //almacena las tareas creadas
	const [newTask, setNewTask] = useState(""); // nueva tareas

	//Crea una tarea nueva al presionar "Enter" y guardo estado del checkbox
	const addTask = (e) => {
		if (e.key === 'Enter' && newTask) {
			setTaskArray([...taskArray, newTask]);
			setNewTask("");    //creo una función para borrar task
		}
	};

	//creo una función para borrar task
	const delTask = (indexReg) => {
		setTaskArray(taskArray.filter((valor, index) => index !== indexReg));
	};

	// Limpiar todas las tareas y el input
	const clearAllTasks = () => {
		setTaskArray([]); // Limpia la lista de tareas
		setNewTask(""); // Limpia el input
	}

	return (
		<div className="todo-container">
			<h1>To-Do List</h1>
			<div className="todo-input">
				<input
					type="text"
					placeholder={(taskArray.length === 0) ? "What needs to be done?" : "Add more tasks..."}
					onChange={(e) => { setNewTask(e.target.value) }}
					onKeyDown={addTask}
					value={newTask} />
			</div>
			<ul className="todo-list">
				{
					taskArray.map((task, index) => {
						return <Task
							key={index}
							task={task}
							index={index}
							delTask={delTask} />
					})
				}
			</ul>
			<div className="footer">
				<span>{taskArray.length} {(taskArray.length <= 1) ? "item left " : "items left"}</span>
				<button
					className="clear-all"
					onClick={clearAllTasks} // Limpia todas las tareas e input
				>
					Clear All
				</button>
			</div>
		</div>
	)
};

export default Home;
