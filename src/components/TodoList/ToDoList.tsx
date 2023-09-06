import React, { useState } from 'react';
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
    const [isOpenList, setIsOpenList] = useState(false)

    const toggleOpenList = () => {
        setIsOpenList(!isOpenList)
    }

    return (
        <div className='todoList'>
            <h1 className='todoList__title'>{props.title}</h1>

            <AddTaskForm addTask={props.addTask} toggleOpenList={toggleOpenList} />

            <div className={`dropdown dropdown_open ${isOpenList ? 'dropdown_open' : ''}`}>
                <Tasks tasks={props.tasks} removeTask={props.removeTask} changeStatus={props.changeStatus} isOpenList={isOpenList} />
                <ToDosButtons filter={props.filter} changeFilter={props.changeFilter} />
            </div>

        </div>
    );
}

export default ToDoList;