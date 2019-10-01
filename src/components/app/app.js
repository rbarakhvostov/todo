import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData : [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
      ]
    }
  }
  handleClickToDelete = (id) => {
    //const {todoData} = this.state;
    // this.setState({
    //   todoData: this.state.todoData.filter(i => i.id !== id)
    // })
    this.setState(({todoData}) => {
      return {
        todoData: todoData.filter(i => i.id !== id)
      }
    })
  }
  render() {
    const {todoData} = this.state;
    return (
      <div>
        <AppHeader toDo={1} done={3} />
        <SearchPanel />
        <ItemStatusFilter />
        <TodoList
          todos={todoData}
          onDeleted={(id) => {
              this.handleClickToDelete(id);
            }
          }
        />
      </div>
    )
  }
}
