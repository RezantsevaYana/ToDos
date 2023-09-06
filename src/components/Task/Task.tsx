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
        <li className='task__container'>
            <label className="task__label">
                <input className="task__checkbox" type='checkbox' onChange={onChangeHandler} checked={props.task.isDone} />
                <span className="task__checkbox-custom"></span>
                <p className={`task__title ${props.task.isDone ? 'isDone' : ''}`}>{props.task.title}</p>
            </label>
            <button className="task__delete-btn" onClick={onClickHandler}>x</button>
        </li>
    )

}

export default Task;