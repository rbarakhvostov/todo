import React, {Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="">
        <button className="">All</button>
        <button className="">Active</button>
        <button className="">Done</button>
      </div>
    )
  }
}