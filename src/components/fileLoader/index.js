import React from 'react';
import { Input, Button } from 'semantic-ui-react'
import axios from 'axios';

export class FileLoader extends React.Component {
  constructor(props){
    super();
    this.state = {
      fileURL: ''
    }
  }

  handleOnChange = (e) => {
    console.log(e.target.value)
  }

  loadWords = () => {
    const wordLocation = this.state.fileURL;
      axios.get().then((data) => {
        console.log('this allegedly came from: ', wordLocation)
        console.log(data);
      }).catch((e) => {
        console.error(e)
      })
  }

  render(){
    return (
      <React.Fragment>
        <p>Please enter/paste the location of the spelling word list</p> 
        <div className="flex-row">
          <div className="flex"><Input fluid /> <Button onClick={() => this.loadWords()} primary>Load words</Button></div>
        </div>
      </React.Fragment>
    )
  }
}



// export default Connect(mapStateToProps)(FileLoader);