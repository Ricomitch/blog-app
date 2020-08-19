import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

function Post(props) {
  
  return (
  
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="img-title-container">
          <img src={props.imgURL}
          className="post-image" />
          <div className="post-title">{props.title}</div>
          </div>
        <div className="author">placeholder author name</div>
        <div className="summary-text">{`${props.textSample.substring(0, 100)}${props.textSample.substring(98, 100).includes('.') ? '' : '...'}`}</div>
      </Link>
    
  )
}

export default Post
