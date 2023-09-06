import React from "react";
import './ToDosButtons.css';
import { FilterValuesType } from '../App/App';

type PropTypes = {
    filter: FilterValuesType
    changeFilter: (value: FilterValuesType) => void
    deleteCompletedeTasks: () => void
    returnCountActiveTask: () => number
}

function ToDosButtons(props: PropTypes) {

    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');

    const activeCount = props.returnCountActiveTask();

    const deleteCompletedeTasks = () => {
        props.deleteCompletedeTasks()
    }

    return (
        <div className="todo-buttons">
            <p className="todo-count">{activeCount} items left</p>
            <div className="buttons-container">
                <button className={`filter-button ${props.filter === 'all' ? 'filter-button__active' : ''}`} onClick={onAllClickHandler}>All</button>
                <button className={`filter-button ${props.filter === 'active' ? 'filter-button__active' : ''}`} onClick={onActiveClickHandler}>Active</button>
                <button className={`filter-button ${props.filter === 'completed' ? 'filter-button__active' : ''}`} onClick={onCompletedClickHandler}>Complited</button>
            </div>
            <button className="delete-completed-button" onClick={deleteCompletedeTasks}>Clear completed</button>
        </div>
    )

}

export default ToDosButtons;