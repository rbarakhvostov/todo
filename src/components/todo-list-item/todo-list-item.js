import React, {Component} from 'react';
import './todo-list-item.css'


export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    }
  }
  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    })
  }
  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      }
    })
  }

  render() {
    const {label, onDeleted} = this.props;
    const {done, important} = this.state;
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
          onClick={this.onLabelClick}>
          { label }
        </span>
        <button
          className=""
          onClick={this.onMarkImportant}>
            !
          </button>
        <button
          className=""
          onClick={onDeleted}>
            -
        </button>
      </div>
    )
  }
}
