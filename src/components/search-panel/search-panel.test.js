import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('<SearchPanel />', () => {
  
  const wrapper = mount(<App />);

  const event1 = { target: { value: 'Create item 1' } };
  const event2 = { target: { value: 'Create item 2' } };
  const event3 = { target: { value: 'Create item 3' } };
  const event4 = { target: { value: 'Create item 4' } };

  wrapper.find('.form-input').simulate('change', event1);
  wrapper.find('.item-add-form').simulate('submit');
  wrapper.find('.form-input').simulate('change', event2);
  wrapper.find('.item-add-form').simulate('submit');
  wrapper.find('.form-input').simulate('change', event3);
  wrapper.find('.item-add-form').simulate('submit');
  wrapper.find('.form-input').simulate('change', event4);
  wrapper.find('.item-add-form').simulate('submit');
  
  it('Search panel works correctly',
    () => {
      wrapper.find('.search-input').simulate('change', { target: { value: '1' } });

      expect(wrapper.find('.todo-list-item').text()).toEqual('Create item 1');
    }
  );

  it('Search panel works correctly',
    () => {
      wrapper.find('.search-input').simulate('change', { target: { value: '2' } });

      expect(wrapper.find('.todo-list-item').text()).toEqual('Create item 2');
    }
  );
});
