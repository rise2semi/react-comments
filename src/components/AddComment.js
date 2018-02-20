import React from 'react';
import commentArray from '../commentArray';
// var $ = require ('jquery');
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
	// loadCommentsFromServer: function() {
	// 	$.ajax({
	// 		url: this.props.url,
	// 		dataType: 'commentArray.js',
	// 		cache: false,
	// 		success: function(data) {
	// 			this.setState({data: data});
	// 		}.bind(this)
	// 		// error: function(xhr, status, err) {
	// 		// 	console.error(this.props.url, status, err.toString());
	// 		// }.bind(this)
	// 	});
	// },
	handleCommentSubmit: function(comment) {
		// var comments = this.state.data;
		    comment.id = Date.now();
		    comment.date = new Date();	    

		    commentArray.push(comment);
		    console.log(commentArray);


		    
		    // $.ajax({
		    // 	url: this.props.url,
		    // 	dataType: 'js',
		    // 	type: 'POST',
		    // 	data: commentArray,
		    // 	success: function(data) {
		    // 		this.setState({data: data});
		    // 	}.bind(this),
		    // 	error: function(xhr, status, err) {
		    // 		this.setState({data: commentArray});
		    // 		console.error(this.props.url, status, err.toString());
		    // 	}.bind(this)
		    // });
		
		    
		},
		getInitialState: function() {
			return {data: []};
		},
		// componentDidMount: function() {
		// 	this.loadCommentsFromServer();
		// 	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
		// },
		render: function() {
			return (
				<div className="commentBox">
					<CommentForm onCommentSubmit={this.handleCommentSubmit} />
				</div>
			);
		}
	});

export default CommentBox


