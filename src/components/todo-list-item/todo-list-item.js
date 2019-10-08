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
    <li className='todo-list-item' onClick={onToggleComplection}>
      <span className={classNames}>
        { label }
      </span>
      <div className='wrap-todo-list-item-button'>
        <button className="todo-list-item-button"
                type='button'
                onClick={
                  (event) => {
                    onToggleImportance();
                    event.stopPropagation();
                  }}>
          <span className="fa fa-exclamation"></span>
        </button>
        <button className="todo-list-item-button"
                type='button'
                onClick={
                  (event) => {
                    onDeleted();
                    event.stopPropagation();
                  }}>
           <span className="fa fa-trash-o"></span>
        </button>
      </div>
    </li>
  )
}

export default TodoListItem;