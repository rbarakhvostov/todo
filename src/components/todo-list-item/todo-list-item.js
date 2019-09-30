import React from 'react';
import './todo-list-item.css'

const TodoListItem = ( {label, important = false} ) => {
  const style = {
    color: important ? 'tomato' : 'black'
  }
  return (
    <div className="todo-list-item">
      <span 
        className="todo-list-item-label"
        style={style}>
        { label }
      </span>
      <button className="">!</button>
      <button className="">-</button>
    </div>
  )
}

export default TodoListItem;