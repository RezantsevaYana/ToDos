import React, { KeyboardEvent, ChangeEvent, useState } from "react";
import './AddTaskForm.css'

type PropsType = {
    addTask: (value: string) => void
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
        setValue('');
    }

    return (
        <div>
            <input value={value || ''}
                onChange={onChangeHandler}
                onKeyUp={onKeyUpHandler}
                className={error ? 'error' : ''} />
            <button onClick={addTasks}>+</button>
            {error && <span className='error-message'>{error}</span>}
        </div>
    )
}

export default AddTaskForm;

