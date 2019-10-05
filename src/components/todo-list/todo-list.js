import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoData, onDeleted, onToggleImportance, onToggleComplection }) => {
  const elements = todoData.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li className='' key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportance={() => onToggleImportance(id)}
          onToggleComplection={() => onToggleComplection(id)}
        />
      </li>
    )
  })

  return (
    <ul className=''>
      { elements }
    </ul>
  )
}

export default TodoList;