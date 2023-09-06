import React from 'react';
import './ToDoList.css';
import { FilterValuesType } from '../App/App';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Tasks from '../Tasks/Tasks';
import ToDosButtons from '../ToDosButtons/ToDosButtons';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (value: string) => void
    changeStatus: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

function ToDoList(props: PropsType) {

    return (
        <div>
            <h1>{props.title}</h1>

            <AddTaskForm addTask={props.addTask} />

            <Tasks tasks={props.tasks} removeTask={props.removeTask} changeStatus={props.changeStatus} />

            <ToDosButtons filter={props.filter} changeFilter={props.changeFilter} />

        </div>
    );
}

export default ToDoList;