import React from "react";
import './ToDosButtons.css';
import { FilterValuesType } from '../App/App';

type PropTypes = {
    filter: FilterValuesType
    changeFilter: (value: FilterValuesType) => void
}

function ToDosButtons(props: PropTypes) {

    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');

    return (
        <div className="todo-buttons">
            <p className="todo-count">2 items left</p>
            <div className="buttons-container">
                <button className={`filter-button ${props.filter === 'all' ? 'filter-button__active' : ''}`} onClick={onAllClickHandler}>All</button>
                <button className={`filter-button ${props.filter === 'active' ? 'filter-button__active' : ''}`} onClick={onActiveClickHandler}>Active</button>
                <button className={`filter-button ${props.filter === 'completed' ? 'filter-button__active' : ''}`} onClick={onCompletedClickHandler}>Complited</button>
            </div>
            <button className="delete-completed-button">Clear completed</button>
        </div>
    )

}

export default ToDosButtons;