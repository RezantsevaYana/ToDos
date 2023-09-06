import React from 'react';

function ToDoList() {
    return (
      <div>
        <h1>ToDos</h1>
  
        <div>
          <input />
          <button>+</button>
        </div>
  
        <ul>
          <li>
            <input type='checkbox' checked />
            <span>Тестовое задание</span>
          </li>
        </ul>
  
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Complited</button>
        </div>
  
      </div>
    );
}

export default ToDoList;