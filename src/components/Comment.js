import React from 'react'



function Comment(props) {
	const {comment} = props
	console.log(props)
	const commentText = <div className="commentText">{comment.commentText}</div>
	return (		
		<div className="commentsList">
            <h2 className="userName">{comment.userName}</h2>
            {<span>creation date: {(new Date(comment.date)).toDateString()}</span>}
            {commentText}
        </div>		
	)
}

export default Comment