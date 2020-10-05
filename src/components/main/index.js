import React from 'react';
import { Card, Icon, Button, Input, Form, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import difference from 'lodash.difference';
import actions from '../../redux/actions'
import { speakWord } from '../../utils';
import './main.css';
class Main extends React.Component {
  constructor(props){
    super();
    this.state = {
      answer: ''
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({answer: value});
  }

  handlePlayBttn = () => {
    const { word } = this.props;
    
    speakWord(word);
  }

  handleButtonClick = () => { 
    console.log(this.state.answer)
    this.props.nextQuestion(this.state.answer)
    this.setState({answer: ''});
  }

  calculateScore = () => {
    const { words, answers } = this.props;
    const wordsMissed = difference(answers, words);
    let score;

    if(wordsMissed.length === 0){
      score = 100;
      return (<div>You got a 100%! Great job!</div>)
    } else {
    return(
      <div>
        You missed {wordsMissed.length} words.
        {wordsMissed.map((word) => word + ', ')}
      </div>
    )
    }
    console.log(difference(answers, words));

  }

  render(){
    const { complete } = this.props;

    return(
      <React.Fragment>
          { !complete && <div className='main-container'>
            <Form>
              <Form.Group>
                <Form.Button size='huge' primary icon onClick={() => this.handlePlayBttn()}><Icon name='play' /></Form.Button> 
                <Form.Input size='huge' placeholder='Type your answer here' value={this.state.answer} onChange={(e) => this.handleInputChange(e)} /> 
                <Form.Button size='huge' onClick={() => this.handleButtonClick()} positive icon labelPosition='right'>Next <Icon name='arrow alternate circle right' /></Form.Button>
              </Form.Group>
              </Form>
          </div>
          }

        { complete && 
          <div className='score-container'>
            <Icon name='flag checkered' /> Test is over!
            {this.calculateScore()}
          </div>
        }
      </React.Fragment>
    )
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextQuestion: (answer) => dispatch(actions.nextQuestion(answer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);