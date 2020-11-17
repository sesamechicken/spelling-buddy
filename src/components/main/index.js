import React from 'react';
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
    const value = e.target.value.toLowerCase();
    
    this.setState({answer: value});

    if(e.target.value === ''){
      this.showError('You must answer before moving on!');
    }
    else {
      this.setState({error: null});
      e.persist();
      if(e.keyCode === 13){
        this.setState({answer: value}, () => {
          e.target.value = '';
          this.handleButtonClick(e);
        });
      }
    }
  }

  handlePlayBttn = () => {
    const { word } = this.props;
    
    speakWord(word);
  }

  handleButtonClick = () => { 
    this.props.nextQuestion(this.state.answer.trim());
    this.setState({answer: ''}, () => {
      if(this.props.words.length != this.props.answers.length){
        // Play the next word
        this.handlePlayBttn();
      }
    });
  }

  render(){
    const { complete, words_loaded } = this.props;

    return(
      <React.Fragment>
        { this.state.error && <div className='error'>{this.state.error}</div> }
        { 
        words_loaded && 
          // Could be a modal
          <div>Words loaded ok</div>
        }
        { !complete && 
          <div className='main-container'>
              <button onClick={() => this.handlePlayBttn()}>Play</button> 
              <input autoCorrect='off' autoCapitalize='off' spellCheck='false' autoComplete='false' ref={this.input} size='large' placeholder='Type your answer here' onKeyUp={(e) => this.handleInputChange(e)} />
              <button onClick={() => this.handleButtonClick()}>Next</button>
          </div>
        }
        { complete && 
          <div className='score-container'>
            Test is over!
            {calculateScore(this.props)}
          </div>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({currentWord = 0, answers = [], words = [], complete = false, words_loaded}) => {
  return {
    word: words[currentWord],
    words,
    words_loaded,
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