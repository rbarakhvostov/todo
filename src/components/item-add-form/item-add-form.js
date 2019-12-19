import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  }
  handleChangeText = (event) => {
    this.setState({
      label: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  }
  render() {
    return (
      <form className='item-add-form'
            onSubmit={ this.handleSubmit }>
        <input className='item-add-form-input form-control'
                type='text'
                placeholder='what should be done'
                value={ this.state.label }
                maxLength='25'
                onChange={ this.handleChangeText } />
        <button className='item-add-form-button btn btn-outline-primary'
                type='submit'>
          <span className="fa fa-plus"></span>
        </button>
      </form>
    );
  }
}
