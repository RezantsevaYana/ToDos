import React, { useState } from 'react';
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
}

function ToDoList(props: PropsType) {
    const [value, setValue] = useState('');


    return (
        <div>
            <h1>{props.title}</h1>

            <div>
                <input value={value || ''}
                    onChange={(e) => { setValue(e.target.value) }}
                    onKeyUp={(e => {
                        console.log(e.key)
                        if (e.key === 'Enter') {
                            props.addTask(value);
                            setValue('');
                        }
                    })} />
                <button onClick={() => {
                    props.addTask(value);
                    setValue('');
                }}>+</button>
            </div>

            <ul>
                {
                    props.tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <input type='checkbox' checked={task.isDone} />
                                <span>{task.title}</span>
                                <button onClick={() => { props.removeTask(task.id) }}>X</button>
                            </li>
                        )
                    })
                }
            </ul>

            <div>
                <button onClick={() => { props.changeFilter('all') }}>All</button>
                <button onClick={() => { props.changeFilter('active') }}>Active</button>
                <button onClick={() => { props.changeFilter('completed') }}>Complited</button>
            </div>

        </div>
    );
}

export default ToDoList;