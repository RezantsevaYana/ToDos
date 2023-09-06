import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';

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
}

function ToDoList(props: PropsType) {
    const [value, setValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTasks();
        }
    }

    const addTasks = () => {
        if (value.trim() === '') {
            return;
        }
        props.addTask(value);
        setValue('');
    }

    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');


    return (
        <div>
            <h1>{props.title}</h1>

            <div>
                <input value={value || ''}
                    onChange={onChangeHandler}
                    onKeyUp={onKeyUpHandler} />
                <button onClick={addTasks}>+</button>
            </div>

            <ul>
                {
                    props.tasks.map((task) => {

                        const onClickHandler = () => {
                            props.removeTask(task.id)
                        }

                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(task.id, e.currentTarget.checked)
                        }

                        return (
                            <li key={task.id}>
                                <input type='checkbox' onChange={onChangeHandler} checked={task.isDone} />
                                <span>{task.title}</span>
                                <button onClick={onClickHandler}>X</button>
                            </li>
                        )
                    })
                }
            </ul>

            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Complited</button>
            </div>

        </div>
    );
}

export default ToDoList;