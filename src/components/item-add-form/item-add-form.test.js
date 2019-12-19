import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('<ItemAddForm />', () => {
  
  const wrapper = mount(<App />);
  window.alert = jest.fn();
  
  it('When the add button is pressed, if the input field is empty, prevent item from being added',
    () => {
      wrapper.find('.item-add-form').simulate('submit');

      expect(wrapper.find('.ToDoItem').length).toBe(0);
    }
  );
  
  it('When the add button is pressed, if the input field is empty, prevent item from being added',
    () => {
      wrapper.find('.item-add-form').simulate('submit');

      expect(window.alert).toHaveBeenCalled();
    }
  );
  
  it('When the add button is pressed, if the input field has text, it creates a new todo item',
    () => {
      const event1 = { target: { value: 'Create item 1' } };
      const event2 = { target: { value: 'Create item 2' } };
      wrapper.find('.item-add-form-input').simulate('change', event1);
      wrapper.find('.item-add-form').simulate('submit');
      wrapper.find('.item-add-form-input').simulate('change', event2);
      wrapper.find('.item-add-form').simulate('submit');

      expect(wrapper.find('.todo-list-item-label').at(1).text()).toEqual('Create item 2');
    }
  );
});
