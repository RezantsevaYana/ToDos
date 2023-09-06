import React, { useState } from 'react';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
  const initialTasks = [
    {id: 1, title: 'Тестовое задание', isDone: false },
    {id: 2, title: 'Изучение TS', isDone: false },
    {id: 3, title: 'Изучение React', isDone: true },
  ]
  
  const [tasks, setTasks] = useState<Array<TaskType>>(initialTasks);
  const [filter, setFilter] = useState<FilterValuesType>('all');

  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  const changeFilter = (value:FilterValuesType) => {
    setFilter(value);
  }

  let taskForToDolist = tasks;

  if (filter === 'completed') {
    taskForToDolist = tasks.filter(task => task.isDone === true)
  }
  if (filter === 'active') {
    taskForToDolist = tasks.filter(task => task.isDone === false)
  }


  return (
    <div className="App">
      <ToDoList title='ToDos' tasks={taskForToDolist} removeTask={removeTask} changeFilter={changeFilter} />
    </div>
  );
}



export default App;
