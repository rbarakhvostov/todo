import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../app';
import TodoListItem from './todo-list-item';

describe('TodoListItem />', () => {
  const wrapper = mount(<App />);

  it ('TodoListItem renders without crashing', () => {
    const wrapper = mount(<TodoListItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it ('Trash button works correctly', () => {
    const event1 = { target: { value: 'Create item 1' } };
    const event2 = { target: { value: 'Create item 2' } };
    wrapper.find('.item-add-form-input').simulate('change', event1);
    wrapper.find('.item-add-form').simulate('submit');
    wrapper.find('.item-add-form-input').simulate('change', event2);
    wrapper.find('.item-add-form').simulate('submit');
    wrapper.find('#trash-button').first().simulate('click');
    expect(wrapper.find('.todo-list-item-label').at(0).text()).toEqual('Create item 2');
  });

  it ('Exclamation button works correctly', () => {
    wrapper.find('#exclamation-button').simulate('click');
    expect(wrapper.find('.todo-list-item').hasClass('important')).toBe(true);
    wrapper.find('#exclamation-button').simulate('click');
    expect(wrapper.find('.todo-list-item').hasClass('important')).toBe(false);
  });

  it ('Toggle completion works correctly', () => {
    wrapper.find('.todo-list-item').simulate('click');
    expect(wrapper.find('.todo-list-item-label').hasClass('done')).toBe(true);
    wrapper.find('.todo-list-item').simulate('click');
    expect(wrapper.find('.todo-list-item-label').hasClass('done')).toBe(false);
  });
});
