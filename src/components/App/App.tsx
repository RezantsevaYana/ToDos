import React, { useState } from 'react';
import './App.css';
import ToDoList, { TaskType } from '../TodoList/ToDoList';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'completed' | 'active';

function App() {
  const initialTasks = [
    { id: v1(), title: 'Тестовое задание', isDone: false },
    { id: v1(), title: 'Изучение TS', isDone: false },
    { id: v1(), title: 'Изучение React', isDone: true },
    { id: v1(), title: 'Прекрасный код', isDone: true },
    { id: v1(), title: 'Покрытие тестами', isDone: false },
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

  const returnCountActiveTask = () => {
    const count = tasks.reduce((count, task) => {
      if (!task.isDone) {
        return count + 1;
      }
      return count;
    }, 0)

    return count;
  }

  const deleteCompletedeTasks = () => {
    let activeTasks = tasks.filter(task => task.isDone === false);
    setTasks(activeTasks);
  }


  return (
    <div className="App">
      <ToDoList title='ToDos'
        tasks={taskForToDolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeStatus={changeStatus}
        filter={filter}
        returnCountActiveTask={returnCountActiveTask}
        deleteCompletedeTasks={deleteCompletedeTasks} />
    </div>
  );
}



export default App;
