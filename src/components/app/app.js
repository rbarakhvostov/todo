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
    this.oldTodoData =
    this.state = {
      todoData : [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Make App'),
        this.createTodoItem('Have a lunch'),
      ],
      term: '',
      activeFilter: 'filter-all'
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
  handleSearch = (term) => {
    this.setState({term});
  }
  search(items, term) {
    if (term.length === 0) return items;
    return items.filter((item) => {
      return item.label
              .toLowerCase()
              .indexOf(term.toLowerCase()) > -1;
    });
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
    console.log(this.state);
    const {todoData, term, activeFilter} = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData.filter((item) => item.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div>
        <AppHeader toDo={toDoCount} done={doneCount} />
        <SearchPanel onSearch={this.handleSearch}/>
        <ItemStatusFilter />
        <TodoList
          todos={visibleItems}
          onDeleted={(id) => {
              this.handleClickToDelete(id);
            }
          }
          onToggleImportance={(id) => this.handleToggleImportantce(id)}           // nested 
          onToggleComplection={(id) => this.handleToggleCompletion(id)} />
        <ItemAddForm
          onItemAdded={this.handleClickToAdd}
        />
      </div>
    )
  }
}
