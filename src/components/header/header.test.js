import React from 'react';
import { Header } from './';
import { mount } from 'enzyme';

describe("Header", () => {
  it("should contain an element with the class 'header'", () => {
    const wrapper = mount(<Header />);
    
    expect(wrapper.find('.header').length).toEqual(1);
  });
  it("should contain a headline", () => {
    const wrapper = mount(<Header />);
    
    expect(wrapper.find('h1').text()).toEqual("Spelling Study Buddy");
  });
});
