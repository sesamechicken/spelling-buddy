import { shallow } from 'enzyme';
import React from 'react';
import { DumbMain } from './';

class speechMock {
  constructor(){
  }
  get speech(){
    return this.speak();
  }
  speak = jest.fn();
}

window.SpeechSynthesisUtterance = jest.fn();
window.speechSynthesis = new speechMock();

describe('Main component', () => {
  it('should fire the speak event', () => {
    shallow(<DumbMain />);
    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(1);
  });

  it('should hold the main UI', () => {
    const wrapper = shallow(<DumbMain />);

    expect(wrapper.find('button').at(0).text()).toEqual('Play');
    expect(wrapper.find('input').props().placeholder).toEqual('Type your answer here');
    expect(wrapper.find('button').at(1).text()).toEqual('Next');
  });
  it('should show an error if they try to submit an empty answer', () => {
    const dumbProps = {
      words_loaded: true,
      complete: false
    };
    const wrapper = shallow(<DumbMain props={dumbProps} />);
    const input = wrapper.find('input');

    input.props().onKeyUp({keyCode: 'Enter', target: {value: ''}});
    expect(wrapper.state().error).toEqual('You must answer before moving on!');
    expect(wrapper.find('.error').length).toEqual(1);
  });
  it('should set the answer if it\'s not empty', () => {
    const dumbProps = {
      words_loaded: true,
      complete: false
    };
    const wrapper = shallow(<DumbMain props={dumbProps} />);
    const input = wrapper.find('input');
    
    input.props().onKeyUp({persist: jest.fn(), target: {value: 'things'}});
    expect(wrapper.state().answer).toEqual('things');
  });
});