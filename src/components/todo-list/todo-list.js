import React from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({ todoItems, onDeleted, onToggleImportance, onToggleComplection }) => {
  const elements = todoItems.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        { ...itemProps }
        onDeleted={ () => onDeleted(id) }
        onToggleImportance={ () => onToggleImportance(id) }
        onToggleComplection={ () => onToggleComplection(id) }
        key={id}
      />
    );
  });

  return (
    <ul className='todo-list list-group'>
      { elements }
    </ul>
  );
}

export default TodoList;
