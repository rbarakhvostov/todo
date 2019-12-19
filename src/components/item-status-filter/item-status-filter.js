import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  buttons = [
    {name: 'all', label: 'ALL'}, 
    {name: 'active', label: 'ACTIVE'},
    {name: 'done', label: 'DONE'}
  ];
  render() {
    const { onFilter, filter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const className = name === filter
                ? 'filter active btn btn-outline-primary btn-lg'
                : 'filter btn btn-outline-primary btn-lg';
      return (
        <button className={ className }
                type='button'
                key={ name }
                onClick={ () => onFilter(name) }>
          { label }
        </button>
      )
    });
    return (
      <div className='filter-wrap btn-group'>
        { buttons }
      </div>
    );
  }
}
