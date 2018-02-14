import React from 'react'
import Comment from './Comment'

export default function CommentList({commentArray}) {
	const commentElements = commentArray.map(comment =>
		<div key={comment.id} className="commentElement"><Comment comment={comment} /></div>
	)
	return (
		<div className="appContainer">{commentElements}</div>		
	)
}