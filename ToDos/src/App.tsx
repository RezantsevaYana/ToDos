import React, { useState } from 'react';
import './App.css';
import ToDoList, { TaskType } from './ToDoList';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
  const initialTasks = [
    { id: v1(), title: 'Тестовое задание', isDone: false },
    { id: v1(), title: 'Изучение TS', isDone: false },
    { id: v1(), title: 'Изучение React', isDone: true },
  ]

  const [tasks, setTasks] = useState<Array<TaskType>>(initialTasks);
  const [filter, setFilter] = useState<FilterValuesType>('all');

  const removeTask = (id: string) => {
    let filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  }

  const addTask = (taskTitle: string) => {
    let newTask = {
      id: v1(),
      title: taskTitle,
      isDone: false
    };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  const changeStatus = (id: string, isDone: boolean) => {
    let task = tasks.find(task => task.id === id);
    if (task) {
      task.isDone = isDone
    }
    const changeTasks = [...tasks]
    setTasks(changeTasks);
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
      <ToDoList title='ToDos'
        tasks={taskForToDolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus} />
    </div>
  );
}



export default App;
