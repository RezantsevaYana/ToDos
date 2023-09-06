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
    filter: FilterValuesType
}

function ToDoList(props: PropsType) {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTasks();
        }
    }

    const addTasks = () => {
        if (value.trim() === '') {
            setError('Невозможно создать пустую задачу')
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
                    onKeyUp={onKeyUpHandler}
                    className={error ? 'error' : ''} />
                <button onClick={addTasks}>+</button>
                {error && <span className='error-message'>{error}</span>}
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
                            <li key={task.id} className={task.isDone ? 'isDone': ''}>
                                <input type='checkbox' onChange={onChangeHandler} checked={task.isDone} />
                                <span>{task.title}</span>
                                <button onClick={onClickHandler}>X</button>
                            </li>
                        )
                    })
                }
            </ul>

            <div>
                <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
                <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
                <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Complited</button>
            </div>

        </div>
    );
}

export default ToDoList;