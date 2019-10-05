import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    {name: 'all', label: 'All'}, 
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];
  render() {
    const { onFilter, filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const className = name === filter ? 'filter filter-active' : 'filter';
      return (
        <button className={className}
                type='button'
                key={name}
                onClick={() => onFilter(name)}>
          { label }
        </button>
      )
    });
    return (
      <div className='filter-wrap'>
        { buttons }
      </div>
    )
  }
}