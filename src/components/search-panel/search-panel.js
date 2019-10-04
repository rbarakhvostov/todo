import React, {Component} from 'react';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    }
  }
  onSearch = (event) => {
    const term = event.target.value;
    this.setState({term});
    this.props.onSearch(term);
  }
  render() {
    console.log(this.state.term)
    return (
      <input className='search-input'
              type='text'
              placeholder='search'
              value={this.state.term}
              onChange={this.onSearch} />
    );
  }
}

