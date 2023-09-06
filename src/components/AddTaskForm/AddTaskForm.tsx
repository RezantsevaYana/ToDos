import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import './AddTaskForm.css'

type PropsType = {
    addTask: (value: string) => void
    toggleOpenList: () => void
    openList: () => void
}

function AddTaskForm(props: PropsType) {

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
        props.addTask(value.trim());
        props.openList();
        setValue('');
    }

    const onClickHandler = () => {
        props.toggleOpenList()
    }

    return (
        <div className="form">
            <div className="form-input__container">
                <button className='open-list__button' onClick={onClickHandler}></button>
                <input value={value || ''}
                    onChange={onChangeHandler}
                    onKeyUp={onKeyUpHandler}
                    className={`form__input ${error ? 'error' : ''}`}
                    placeholder="What needs to be done" />
                <button className="add-task__button" onClick={addTasks}>+</button>
            </div>
            {error && <span className='error-message'>{error}</span>}
        </div>
    )
}

export default AddTaskForm;

