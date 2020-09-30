import React from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button, Icon } from 'semantic-ui-react';
import actions from '../../redux/actions';
import './wordLoader.css';
class WordLoader extends React.Component {
  
  constructor(props){
    super();
    this.state = {
      words: '',
      visible: true
    }
  }

  componentDidMount(){
    this.setState({words: this.props.words})
  }
  handleOnChange = (e, data) => {
    this.setState({words: data.value})
  }
  handleClick = () => {
    let words = this.state.words;
    words = words.replace(/ /g, '')
    words = words.replace(/\n/g, ',')
    words = words.split(',');

    this.props.loadWords(words)
  }
  clearSavedWords = () => {
    localStorage.clear();
    this.setState({words: ''})
  }

  hideWordBank = () => {
    this.setState((prevState) => (
      { visible: !prevState.visible }
    )
  )};

  render(){
    const { words, visible } = this.state;

    return(
      <div>
        <Form>
          <TextArea className={ visible ? '' : 'hidden'} value={words} onChange={(e, data) => this.handleOnChange(e, data)} style={{ minHeight: 100 }} placeholder='Type the words here to test' />
          <div className='text-center'>
            <Button onClick={() => this.handleClick()}><Icon name='upload' /> Load words</Button>
            <Button onClick={() => this.clearSavedWords()}><Icon name='trash' /> Clear saved words</Button>
            <Button onClick={() => this.hideWordBank()}><Icon name='hide' /> Hide word bank</Button>
          </div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const words = state.words || ''
  return {
    words
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadWords: (wordList) => dispatch(actions.loadWords(wordList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordLoader);