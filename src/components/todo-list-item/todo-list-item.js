import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important, 
  done, onDeleted,
  onToggleImportance, onToggleComplection}) => {
  
  let classNames = 'todo-list-item-label';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }
  return (
    <div className="todo-list-item">
      <span className={classNames} onClick={onToggleComplection}>
        { label }
      </span>
      <button
        className=""
        onClick={onToggleImportance}
      >
          !
        </button>
      <button
        className=""
        onClick={onDeleted}
      >
          -
      </button>
    </div>
  )
}

export default TodoListItem;