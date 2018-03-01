import React from 'react'

function Comment(props) {
	const {comment} = props
	
	return (		
		<div>
            <div className="commentText">{comment.commentText}</div>
            <span className="userName">by <b>{comment.userName}</b></span>
            {<span>creation date: <b>{(new Date(comment.date)).toString().slice(0, 25)}</b></span>}
        </div>		
	)
}

export default Comment