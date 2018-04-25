import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/style.css';

import CommentForm from './components/CommentForm';
import commentArray from './commentArray.json';




class App extends Component {

  constructor (props){
      super(props);

      this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit = comment => {
      comment.id = Date.now();
      comment.date = new Date();
      commentArray.unshift(comment);

      this.forceUpdate();         
  }



  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img src={logo} className="appLogo" alt="logo" />
          <h2>React Comments</h2>
        </div>        
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />          
         
      </div>
    );
  }

}

export default App;
