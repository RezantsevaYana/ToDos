import React from "react";
import './Tasks.css'
import { TaskType } from '../TodoList/ToDoList';
import Task from "../Task/Task";

type Proptypes = {
    tasks: TaskType[]
    removeTask: (id: string) => void
    changeStatus: (id: string, isDone: boolean) => void
    isOpenList: boolean
}

function Tasks(props: Proptypes) {
    return (
        <ul className='tasks-list'>
            {
                props.tasks.map((task) => {
                    return (
                        <Task key={task.id} task={task} removeTask={props.removeTask} changeStatus={props.changeStatus} />
                    )
                })
            }
        </ul>
    );
}

export default Tasks