import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearch = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearch(term);
  }

  render() {
    return (
      <input className='search-input form-control'
              type='text'
              placeholder='search'
              value={ this.state.term }
              onChange={ this.onSearch } />
    );
  }
}
