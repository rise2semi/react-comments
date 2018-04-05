import React from 'react'

class Comment extends React.Component {

	render() {

		return (	
			<div className="commentWrap">
				<div className="commentBody">
		            <div className="commentText">{this.props.commentText}</div>
		            <span className="userName">by <b>{this.props.userName}</b></span>
		            {<span>creation date: <b>{(new Date(this.props.date)).toString().slice(0, 25)}</b></span>}
		            <button onClick={this.props.onClick} type="submit">Reply</button>		            
			     </div>
		  		{ this.props.children }
		  	</div>
		)
	}
}

class CommentList extends React.Component {

	list(commentArray) {
	  	const children = (replyComment) => {
	    	if (replyComment) {
	      		return <div className='replyComment'>{ this.list(replyComment) }</div>
	      	}
	    }
	    
	    return commentArray.map((node, index) => {
	        return <Comment key={ node.id } commentText={node.commentText} userName={node.userName} date={node.date} onClick={this.handleChildClick}>
	        	{children(node.replyComment)}	  
	      	</Comment>
	    })
	}
	  
	render() {
		return <div className="appContainer">			
			{ this.list(this.props.commentArray) }
		</div>
	}
}

export default CommentList