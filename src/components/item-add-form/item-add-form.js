import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Have a rest'
    }
  }
  render() {
    const {onItemAdded} = this.props;
    const {text} = this.state;
    return (
      <div className='item-add-form'>
        <button
          className=''
          onClick={() => onItemAdded(text)} 
        >
          ADD
        </button>
      </div>
    )
  }
}