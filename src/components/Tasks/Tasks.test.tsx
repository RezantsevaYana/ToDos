import { render, screen } from '@testing-library/react';
import Tasks from './Tasks';
import { v1 } from 'uuid';


describe('Tasks component', () => {
    it('Tasks renders', () => {
        const tasks = [
            { id: v1(), title: 'Тестовое задание', isDone: false },
            { id: v1(), title: 'Изучение TS', isDone: false },
            { id: v1(), title: 'Изучение React', isDone: true },
            { id: v1(), title: 'Прекрасный код', isDone: true },
            { id: v1(), title: 'Покрытие тестами', isDone: false },
          ]
        const removeTask = jest.fn();
        const changeStatus = jest.fn();
        const isOpenList = true;

        render(<Tasks tasks={tasks} removeTask={removeTask} changeStatus={changeStatus} isOpenList={isOpenList} />)

        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it ('Tasks renders without data', () => {
        const removeTask = jest.fn();
        const changeStatus = jest.fn();
        const isOpenList = true;
        render (<Tasks tasks={[]} removeTask={removeTask} changeStatus={changeStatus} isOpenList={isOpenList} />)

        expect(screen.getByRole('list')).toBeInTheDocument();
    });
})