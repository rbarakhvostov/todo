import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li className='' key={id}>
        <TodoListItem {...itemProps} />
      </li>
    )
  })

  return (
    <ul className=''>
      {elements}
    </ul>
  )
}

export default TodoList;