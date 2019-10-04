import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className='filter-wrap'>
        <button className=''
                type='button'>
          All
        </button>
        <button className=''
                type='button'>
          Active
        </button>
        <button className=''
                type='button'>
          Done
        </button>
      </div>
    )
  }
}