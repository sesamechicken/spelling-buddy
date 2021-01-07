import React from 'react';
import App from './App';

describe('App component', () => {
  it('should mount', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toBeDefined();
  });
});