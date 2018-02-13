import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/style.css';
import Comment from './components/Comment';
import commentList from './commentList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
          <h2>React Comments</h2>
        </div>
        <div className="container">
          <Comment comment={commentList[0]} />
        </div>
      </div>
    );
  }
}

export default App;
