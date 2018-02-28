import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/style.css';
import CommentList from './components/CommentList';
import CommentBox from './components/AddComment';
import commentArray from './commentArray.json';




class App extends Component {

  handleCommentSubmit = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
          <h2>React Comments</h2>
        </div>        
        <CommentBox  onCommentSubmit={this.handleCommentSubmit} />           
        <CommentList  commentArray={commentArray}  /> 
      </div>
    );
  }

}

export default App;
