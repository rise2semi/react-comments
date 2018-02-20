import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/style.css';
import CommentList from './components/CommentList';
import CommentBox from './components/AddComment';
import commentArray from './commentArray';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
          <h2>React Comments</h2>
        </div>        
        <CommentList commentArray={commentArray} /> 
        <CommentBox onCommentSubmit={this.handleCommentSubmit} />           
      </div>
    );
  }
}

export default App;
