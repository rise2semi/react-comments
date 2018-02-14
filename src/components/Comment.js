import React from 'react'

function Comment(props) {
	const {comment} = props
	const commentText = <div className="commentText">{comment.commentText}</div>
	
	return (		
		<div>
            {commentText}
            <span className="userName">by <b>{comment.userName}</b></span>
            {<span>creation date: <b>{(new Date(comment.date)).toDateString()} </b></span>}
        </div>		
	)
}

export default Comment