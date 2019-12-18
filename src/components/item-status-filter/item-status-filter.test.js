import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('<ItemStatusFilter />', () => {
  
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

  wrapper.find('.todo-list-item').at(0).simulate('click');
  wrapper.find('.todo-list-item').at(2).simulate('click');

  it('Apply ACTIVE filter',
    () => {
      wrapper.find('.filter-wrap').children().at(1).simulate('click');
      expect(wrapper.find('.todo-list-item').length).toBe(2);
      expect(wrapper.find('.todo-list-item').at(0).text()).toBe('Create item 2');
      expect(wrapper.find('.todo-list-item').at(1).text()).toBe('Create item 4');
    }
  );

  it('Apply DONE filter',
    () => {
      wrapper.find('.filter-wrap').children().at(2).simulate('click');
      expect(wrapper.find('.todo-list-item').length).toBe(2);
      expect(wrapper.find('.todo-list-item').at(0).text()).toBe('Create item 1');
      expect(wrapper.find('.todo-list-item').at(1).text()).toBe('Create item 3');
    }
  );

  it('Apply ALL filter',
    () => {
      wrapper.find('.filter-wrap').children().at(0).simulate('click');
      expect(wrapper.find('.todo-list-item').length).toBe(4);
    }
  );
});
