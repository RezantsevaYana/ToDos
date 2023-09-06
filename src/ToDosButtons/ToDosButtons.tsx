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
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onCompletedClickHandler}>Complited</button>
        </div>
    )

}

export default ToDosButtons;