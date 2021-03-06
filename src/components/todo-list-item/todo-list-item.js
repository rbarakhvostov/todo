import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important,
  done, onDeleted,
  onToggleImportance, onToggleCompletion }) => {
  
  let classNamesItem = important
                        ? 'todo-list-item important'
                        : 'todo-list-item';

  let classNamesItemLabel = done
                              ? 'todo-list-item-label done'
                              : 'todo-list-item-label';

  return (
    <li className={`${classNamesItem} list-group-item`}
        onClick={ onToggleCompletion }>
      <span className={ classNamesItemLabel }>
        { label }
      </span>
      <div className='wrap-todo-list-item-button'>
        <button id='exclamation-button'
                className='todo-list-item-button btn btn-outline-secondary btn-sm'
                type='button'
                onClick={
                  (event) => {
                    onToggleImportance();
                    event.stopPropagation();
                  }}>
          <span className='fa fa-exclamation'></span>
        </button>
        <button id='trash-button'
                className='todo-list-item-button btn btn-outline-danger btn-sm'
                type='button'
                onClick={
                  (event) => {
                    onDeleted();
                    event.stopPropagation();
                  }}>
           <span className='fa fa-trash-o'></span>
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
