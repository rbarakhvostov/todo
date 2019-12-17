import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './app';

describe('<App />', () => {
  const wrapper = mount(<App />);

  it ('App renders without crashing', () => {

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it ('App renders without crashing (check h1)', () => {

    expect(wrapper.find("h1").text()).toEqual("Todo App");
  });
});
