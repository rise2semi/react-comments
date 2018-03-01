import React from 'react';
import commentArray from '../commentArray.json';
var createReactClass = require('create-react-class');

const CommentForm = createReactClass({	

	getInitialState: function() {
		return {userName: '', commentText: ''};
	},

	handleUserNameChange(event) {
		this.setState({'userName': event.target.value});
	},

	handleTextAreaChange(event) {
		this.setState({'commentText': event.target.value});
	},

	handleSubmit(event) {
		event.preventDefault();

		var userName = this.state.userName.trim();
		var commentText = this.state.commentText.trim();

		if (!userName || !commentText) {
			return;
		}
		this.props.onCommentSubmit({userName: userName, commentText: commentText});
		this.setState({userName: '', commentText: ''});

	},

	render() {		
		return (				
			<form onSubmit={this.handleSubmit} className="addCommentForm">
				<input value={this.state.userName} onChange={this.handleUserNameChange} type="text" placeholder="Type your name" />
				<textarea value={this.state.commentText} onChange={this.handleTextAreaChange} placeholder="Leave a comment" name="comment"></textarea>
				<button onClick={this.handleSubmit} type="submit">Comment</button>
			</form>		
		)
	}
});

const CommentBox = createReactClass({
	handleCommentSubmit: function(comment) {
	    comment.id = Date.now();
	    comment.date = new Date();

	    commentArray.unshift(comment);
	    this.props.onCommentSubmit();	    	    
	},

	getInitialState: function() {
	    return {data: []};
	},

	render: function() {
		return (
			<div className="commentBox">
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

export default CommentBox


