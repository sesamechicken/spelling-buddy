import React from 'react';
import { Header } from './';


describe('Header component', () => {
  it('should render the header', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.html()).toContain('Spelling Buddy');
  });
});