import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskForm from './AddTaskForm';

describe('AddTaskForm component', () => {
    it ('AddTaskForm component renders', () => {
        const toggleOpenList = jest.fn();
        const openList = jest.fn();
        const addTask = jest.fn();
        const isOpenList = true;

        render (<AddTaskForm addTask={addTask} toggleOpenList={toggleOpenList} openList={openList} isOpenList={isOpenList}  />)
    });

    it ('AddTaskForm empty input', () => {
        const toggleOpenList = jest.fn();
        const openList = jest.fn();
        const addTask = jest.fn();
        const isOpenList = true;

        render (<AddTaskForm addTask={addTask} toggleOpenList={toggleOpenList} openList={openList} isOpenList={isOpenList}  />)

        expect(screen.getByRole('textbox')).toHaveValue('');
    });

    it ('AddTaskForm change input', () => {
        const toggleOpenList = jest.fn();
        const openList = jest.fn();
        const addTask = jest.fn();
        const isOpenList = true;

        render (<AddTaskForm addTask={addTask} toggleOpenList={toggleOpenList} openList={openList} isOpenList={isOpenList}  />)

        const inputElement = screen.getByRole('textbox');
        const newValue = 'New Value';

        fireEvent.change(inputElement, { target: { value: newValue } });

        expect(inputElement).toHaveValue(newValue);
    });
})