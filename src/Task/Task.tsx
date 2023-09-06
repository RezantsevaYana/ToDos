import React, { ChangeEvent } from "react";
import './Task.css'
import { TaskType } from '../TodoList/ToDoList';

type PropsType = {
    task: TaskType
    removeTask: (id: string) => void
    changeStatus: (id: string, isDone: boolean) => void
}

function Task(props: PropsType) {

    const onClickHandler = () => {
        props.removeTask(props.task.id)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeStatus(props.task.id, e.currentTarget.checked)
    }

    return (
        <li className={props.task.isDone ? 'isDone' : ''}>
            <input type='checkbox' onChange={onChangeHandler} checked={props.task.isDone} />
            <span>{props.task.title}</span>
            <button onClick={onClickHandler}>X</button>
        </li>
    )

}

export default Task;