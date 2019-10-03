import React from 'react';
import './todo-list-item.css'


const TodoListItem = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false,
  //     important: true
  //   }
  // }
  // onLabelClick = () => {
  //   this.setState(({done}) => {
  //     return {
  //       done: !done
  //     }
  //   })
  // }
  // onMarkImportant = () => {
  //   this.setState(({important}) => {
  //     return {
  //       important: !important
  //     }
  //   })
  // }

  const {label, important, 
          done, onDeleted,
          onToggleImportance, onToggleComplection} = props;
  // const {done, important} = this.state;
  let classNames = 'todo-list-item-label';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }
  return (
    <div className="todo-list-item">
      <span 
        className={classNames}
        onClick={onToggleComplection}>
        { label }
      </span>
      <button
        className=""
        // onClick={this.onMarkImportant}
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