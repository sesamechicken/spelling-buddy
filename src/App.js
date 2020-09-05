import React from 'react';
import { FileLoader } from './components/fileLoader';
import { Header } from './components/header';
import './App.css';

export default class App extends React.Component {
  render(){
    return (
      <div className='main-body'>
        <Header />
        <FileLoader />
      </div>
    )
  }
}