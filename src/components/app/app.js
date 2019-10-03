import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form'

let a;
export default class App extends Component {
  constructor() {
    super();
    this.newId = 100;
    this.state = {
      todoData : [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make App'),
        this.createTodoItem('Have a lunch'),
      ],
    }
    a=this.state;
  }
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((item) => item.id === id );
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }
  handleToggleImportantce = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = this.toggleProperty(todoData, id, 'important');
      return {
        todoData: newTodoData
      }
    })
  }
  handleToggleCompletion = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = this.toggleProperty(todoData, id, 'done'); 
      return {
        todoData: newTodoData,
      }
    })
  }
  handleClickToDelete = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.filter(item => item.id !== id)
      }
    })
  }
  handleClickToAdd = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, newItem]
      }
    })
  }
  createTodoItem(text) {
    return {
      label: text,
      important: false,
      done: false,
      id: this.newId++
    }
  }
  render() {
    console.log(this, a);
    const {todoData} = this.state;
    const doneCount = todoData.filter((item) => item.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div>
        <AppHeader toDo={toDoCount} done={doneCount} />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList
          todos={todoData}
          onDeleted={(id) => {
              this.handleClickToDelete(id);
            }
          }
          onToggleImportance={(id) => this.handleToggleImportantce(id)}
          onToggleComplection={(id) => this.handleToggleCompletion(id)}
        />
        <ItemAddForm
          onItemAdded={this.handleClickToAdd}
        />
      </div>
    )
  }
}
