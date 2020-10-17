import React from 'react';
import WordLoader from './components/wordLoader';
import { Header } from './components/header';
import Main from './components/main';
import './App.css';

export default class App extends React.Component {
  render(){
    return (
      <div className='main-body'>
        <Header />
        {/* <FileLoader /> */}
        <WordLoader />
        <Main />
      </div>
    );
  }
}