import React from 'react';
import { DumbWordLoader } from './';

describe('WordLoader', () => {
  it('should contain a textarea thats inititally hidden', () => {
    const wrapper = shallow(<DumbWordLoader />);

    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('textarea').props().className).toEqual('hidden');
    expect(wrapper.state().visible).toEqual(false);
  });

  it('should show the textarea when the Show button is clicked', () => {
    const wrapper = shallow(<DumbWordLoader />);

    wrapper.find('[data-qa="hide_bttn"]').simulate('click');
    expect(wrapper.state().visible).toEqual(true);
    expect(wrapper.find('textarea').props().className).toEqual('');
  });

  it('should save the words entered into it', () => {
    const props = {
      loadWords: jest.fn()
    };
    const wrapper = shallow(<DumbWordLoader {...props} />);
    const textarea = wrapper.find('textarea');
    const testWords = 'Milk,Bread,Eggs';
    const instance = wrapper.instance();

    jest.spyOn(instance, 'handleClick');

    wrapper.find('[data-qa="hide_bttn"]').simulate('click');
    wrapper.setState({ words: ''});

    textarea.simulate('change', { target: { 
        value: testWords
      }
    });
    wrapper.update();
    wrapper.find('[data-qa="load_bttn"]').simulate('click');

    expect(instance.handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.state().words).toEqual(testWords);
    expect(props.loadWords).toHaveBeenCalledTimes(1);
    expect(props.loadWords).toHaveBeenCalledWith(testWords.toLowerCase().split(','));
  });

  it('should clear the words entered into it', () => {
    const props = {
      loadWords: jest.fn()
    };
    const wrapper = shallow(<DumbWordLoader {...props} />);
    const textarea = wrapper.find('textarea');
    const testWords = 'Milk, Bread, Eggs';
    const instance = wrapper.instance();

    jest.spyOn(instance, 'clearSavedWords');
    jest.spyOn(instance, 'handleClick');

    wrapper.find('[data-qa="hide_bttn"]').simulate('click');
    textarea.simulate('change', { target: { 
        value: testWords
      }
    });
    wrapper.update();
    wrapper.find('[data-qa="load_bttn"]').simulate('click');

    expect(instance.handleClick).toHaveBeenCalledTimes(1);
    expect(wrapper.state().words).toEqual(testWords);
    expect(props.loadWords).toHaveBeenCalledTimes(1);
    wrapper.find('[data-qa="clear_bttn"]').simulate('click');
    expect(instance.clearSavedWords).toHaveBeenCalledTimes(1);
    expect(wrapper.state().words).toEqual('');
  });
});