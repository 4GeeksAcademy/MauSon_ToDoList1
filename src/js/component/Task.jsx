import React, { useState } from "react";

const Task = ({ task, index, delTask, onChecked }) => {
    const [isChecked, setIsChecked] = useState(false); //estado local para controlar si check is true

    //Función para controlar si el checkbox cambia de estado
    const handleCheckBoxChange = () => {
        setIsChecked(prev => !prev); //cambia el estado del checkbox
    }

    return (
        <>
            <li className="todo-item">
                <input type="checkbox"
                    id={`checkbox-${index}`} // Asigna un id único para vincular con el label
                    className="todo-checkbox"
                    checked={isChecked} //vinculo el estado con el checkbox
                    onChange={handleCheckBoxChange} // cambia el estado del checkbox
                />
                <label
                    htmlFor={`checkbox-${index}`} // Vincula el label con el input mediante el id
                    className={isChecked ? "todo-text completed" : "todo-text"}
                >
                    {task}
                </label>
                <span
                    className="delete-icon text-danger"
                    onClick={() => delTask(index)}
                    role="button" > &#10006;
                </span>
            </li>
        </>
    );
}

export default Task