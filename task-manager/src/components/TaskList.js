import React from 'react';
import './Task.scss';
const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? 'done' : ''}>
          <span onClick={() => toggleTask(task.id)}>{task.text}</span>
          <button onClick={() => deleteTask(task.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
