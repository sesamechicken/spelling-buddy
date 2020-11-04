import React from 'react';
import { Header } from './';


describe('Header component', () => {
  it('should render the header', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.html()).toContain('Spelling Buddy');
  });
  it('should render a header element', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.html()).toContain('header');
  });
});