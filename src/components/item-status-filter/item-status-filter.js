import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({ onFilter, filter }) => {
  const buttonsInfo = [
    {name: 'all', label: 'ALL'}, 
    {name: 'active', label: 'ACTIVE'},
    {name: 'done', label: 'DONE'}
  ];

  const buttons = buttonsInfo.map(({ name, label }) => {
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

export default ItemStatusFilter;
