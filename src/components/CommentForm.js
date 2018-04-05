import React from 'react';
import CommentList from './CommentList';
import commentArray from '../commentArray.json';

class CommentForm extends React.Component {

	constructor(props) {
    	super(props);
	    this.state = {
	      userName: '',
	      commentText: ''
	    }
	    
	    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    	this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleUserNameChange(event) {
		this.setState({'userName': event.target.value});
	}

	handleTextAreaChange(event) {
		this.setState({'commentText': event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault();

		var userName = this.state.userName.trim();
		var commentText = this.state.commentText.trim();

		if (!userName || !commentText) {
			return;
		}
		this.props.onCommentSubmit({userName: userName, commentText: commentText});
		this.setState({userName: '', commentText: ''});
	}

	render() {		
		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit} className="addCommentForm">
					<input value={this.state.userName}  onChange={this.handleUserNameChange}  type="text" placeholder="Type your name" name='userName' />
					<textarea value={this.state.commentText} onChange={this.handleTextAreaChange} placeholder="Leave a comment" name="comment"></textarea>
					<button onClick={this.handleSubmit}  type="submit">Comment</button>
				</form>		
				<CommentList commentArray={commentArray} onClick={this.handleChildClick} />
			</React.Fragment>				
		)
	}
}

 export default CommentForm