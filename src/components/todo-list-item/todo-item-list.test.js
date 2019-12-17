import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoListItem from './todo-list-item';

describe('<App />', () => {
  it ('TodoListItem renders without crashing', () => {
    const wrapper = mount(<TodoListItem />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
