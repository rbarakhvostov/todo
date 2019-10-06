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
    <li className='todo-list-item'>
      <span className={classNames} onClick={onToggleComplection}>
        { label }
      </span>
      <div className='wrap-btn-item'>
        <button className="btn-item"
                type='button'
                onClick={onToggleImportance}>
          <span className="fa fa-exclamation"></span>
        </button>
        <button className="btn-item"
                type='button'
                onClick={onDeleted}>
           <span className="fa fa-trash-o"></span>
        </button>
      </div>
    </li>
  )
}

export default TodoListItem;