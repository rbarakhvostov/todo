import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  }
  handleChangeText = (event) => {
    this.setState({
      label: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {onItemAdded} = this.props;
    const {label} = this.state;
    onItemAdded(label);
    this.setState({
      label: '',
    });
  }
  render() {
    return (
      <form className='item-add-form'
            onSubmit={this.handleSubmit}>
        <input className=''
                type='text'
                placeholder='what should be done'
                value={this.state.label}
                maxLength='20'
                onChange={this.handleChangeText} />
        <button className='' type='submit'>
          ADD
        </button>
      </form>
    )
  }
}