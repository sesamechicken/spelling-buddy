import React from 'react';
import { Card, Icon, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import actions from '../../redux/actions'
import { speakWord } from '../../utils';

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

  render(){
    return(
      <Card>
        <div>
        <Button primary icon onClick={() => this.handlePlayBttn()}><Icon name='play' /></Button>
          <div><Input placeholder='Type your answer here' value={this.state.answer} onChange={(e) => this.handleInputChange(e)} /> <Button onClick={() => this.handleButtonClick()} secondary>Next</Button></div>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const currentWord = state.currentWord || 0;
  const word = state.words[state.currentWord];

  return {
    word,
    currentWord
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextQuestion: (answer) => dispatch(actions.nextQuestion(answer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);