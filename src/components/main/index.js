import React from 'react';
import { Icon, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { speakWord, calculateScore } from '../../utils';
import './main.css';
class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      answer: '',
      error: null
    };
  }
  componentDidMount(){
    this.handlePlayBttn();
  }
  
  showError = (msg) => {
    this.setState({error: msg});
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    if(e.target.value === ''){
      this.showError('You must answer before moving on!');
    }
    else {
      this.setState({error: null});
      e.persist();
      if(e.keyCode === 13){
        this.setState({answer: value}, () => {
          e.target.value = '';
          this.handleButtonClick();
        });
      }
    }
  }

  handlePlayBttn = () => {
    const { word } = this.props;
    
    speakWord(word);
  }

  handleButtonClick = () => { 
    
    this.setState({answer: ''}, () => {
      if(this.props.words.length != this.props.answers.length){
        this.handlePlayBttn();
      }
    });
    this.props.nextQuestion(this.state.answer);
  }

  render(){
    const { complete } = this.props;

    return(
      <React.Fragment>
        { this.state.error && <div className='error'>{this.state.error}</div> }
        { !complete && <div className='main-container'>
              <Button size='huge' primary icon onClick={() => this.handlePlayBttn()}><Icon name='play' /></Button> 
              <Input size='huge' placeholder='Type your answer here' onKeyUp={(e) => this.handleInputChange(e)} />
              <Button size='huge' onClick={() => this.handleButtonClick()} positive labelPosition='right'>Next <Icon name='arrow alternate circle right' /></Button>
          </div>
        }
        { complete && 
          <div className='score-container'>
            <Icon name='flag checkered' /> Test is over!
            {calculateScore(this.props)}
          </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const currentWord = state.currentWord || 0;
  const answers = state.answers || [];
  const words = state.words || [];
  const word = state.words[state.currentWord];
  const complete = state.complete || false;
  return {
    word,
    words,
    answers,
    currentWord,
    complete
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextQuestion: (answer) => dispatch(actions.nextQuestion(answer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);