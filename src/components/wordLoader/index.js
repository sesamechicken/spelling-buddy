import React from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button } from 'semantic-ui-react';
import actions from '../../redux/actions';

class WordLoader extends React.Component {
  
  constructor(props){
    super();
    this.state = {
      words: ''
    }
  }
handleOnChange = (e, data) => {
  console.log(data)
}
  handleClick = () => {
    this.props.loadWords()
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <Form>
          <TextArea onChange={(e, data) => this.handleOnChange(e, data)} style={{ minHeight: 100 }} placeholder='Type the words here to test' />
          <Button onClick={() => this.handleClick()}>Load words</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadWords: (wordList) => dispatch(actions.loadWords(wordList))
  };
};

export default connect(null, mapDispatchToProps)(WordLoader);