import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {
  newId = 100;
  state = {
    todoData : [],
    term: '',
    filter: 'all',
  }
  
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((item) => item.id === id );
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1),
    ];
  }
  handleToggleImportantce = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = this.toggleProperty(todoData, id, 'important');
      return {
        todoData: newTodoData,
      }
    })
  }
  handleToggleCompletion = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = this.toggleProperty(todoData, id, 'done'); 
      return {
        todoData: newTodoData,
      }
    })
  }
  handleClickToDelete = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter(item => item.id !== id),
      }
    })
  }
  handleClickToAdd = (label) => {
    if (label.length === 0) { 
      alert('new item has no value');
      return
    }
    const newItem = this.createTodoItem(label);
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newItem],
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
  handleFilter = (filter) => {
    this.setState({filter});
  }
  filter(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done': 
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: ++this.newId,
    }
  }
  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.search(this.filter(todoData, filter), term);
    const doneCount = todoData.filter((item) => item.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className='app'>
        <AppHeader toDo={toDoCount} done={doneCount} />
        <SearchPanel onSearch={this.handleSearch} />
        <ItemStatusFilter onFilter={this.handleFilter} filter={filter}/>
        <TodoList
          todoItems={visibleItems}
          onDeleted={this.handleClickToDelete}
          onToggleImportance={this.handleToggleImportantce}
          onToggleComplection={this.handleToggleCompletion} />
        <ItemAddForm
          onItemAdded={this.handleClickToAdd}
        />
      </div>
    )
  }
}
