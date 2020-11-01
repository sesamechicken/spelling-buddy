import React from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button, Icon } from 'semantic-ui-react';
import actions from '../../redux/actions';
import './wordLoader.css';
class WordLoader extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      words: '',
      visible: false
    };
  }

  componentDidMount(){
    this.setState({words: this.props.words});
  }

  handleOnChange = (e, data) => {
    this.setState({words: data.value});
  }

  handleClick = () => {
    let words = this.state.words;
    
    // Sanitize the words 
    words = words.replace(/ /g, '');
    words = words.replace(/\n/g, ',');
    words = words.split(',');
    words = words.filter(word => word != '');

    // Lowercase all the words (answers will be lowered, too)
    const cleanWords = words.map((word) => word.toLowerCase());

    this.props.loadWords(cleanWords);
  }

  clearSavedWords = () => {
    localStorage.clear();
    this.setState({words: ''});
  }

  hideWordBank = () => {
    this.setState((prevState) => (
      { visible: !prevState.visible }
    ));
  };

  render(){
    const { words, visible } = this.state;

    return(
      <div>
        <Form>
          <TextArea className={ visible ? '' : 'hidden'} defaultValue={words} onChange={(e, data) => this.handleOnChange(e, data)} style={{ minHeight: 100 }} placeholder='Type the words here to test'></TextArea>
          <div className='bttns text-center'>
            <Button onClick={() => this.handleClick()}><Icon name='upload' /> Load</Button>
            <Button onClick={() => this.clearSavedWords()}><Icon name='trash' /> Clear</Button>
            <Button onClick={() => this.hideWordBank()}>
              {
                visible && 
                <span><Icon name='hide' />Hide</span>
              ||
                !visible &&
                <span><Icon name='eye' />Show</span>
              }
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({words = ''}) => {
  return {
    words
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadWords: (wordList) => dispatch(actions.loadWords(wordList))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordLoader);