import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('<Header />', () => {
  const wrapper = mount(<App />);

  it ('Header renders correctly', () => {
    const event1 = { target: { value: 'Create item 1' } };
    const event2 = { target: { value: 'Create item 2' } };
    wrapper.find('.item-add-form-input').simulate('change', event1);
    wrapper.find('.item-add-form').simulate('submit');
    wrapper.find('.item-add-form-input').simulate('change', event2);
    wrapper.find('.item-add-form').simulate('submit');
    expect(wrapper.find(".todo-info").text()).toEqual("2 active, 0 done");
    wrapper.find('.todo-list-item').at(0).simulate('click');
    expect(wrapper.find(".todo-info").text()).toEqual("1 active, 1 done");
    wrapper.find('.todo-list-item').at(1).simulate('click');
    expect(wrapper.find(".todo-info").text()).toEqual("0 active, 2 done");
    wrapper.find('.todo-list-item').at(0).simulate('click');
    expect(wrapper.find(".todo-info").text()).toEqual("1 active, 1 done");
    wrapper.find('.todo-list-item').at(1).simulate('click');
    expect(wrapper.find(".todo-info").text()).toEqual("2 active, 0 done");
  });
});
