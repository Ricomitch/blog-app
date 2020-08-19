import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

function Post(props) {

  return (
    <div className="post">
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="img-title-container">
          <img src={props.imgURL}
            className="post-image" />
          <div className="post-title">{props.title}</div>
        </div>
      </Link>
      <div className="author" onClick={(e) => props.handleFilter(e)}>{props.authorName}</div>
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="summary-text">{`${props.textSample.substring(0, 100)}${props.textSample.substring(98, 100).includes('.') ? '' : '...'}`}</div>
      </Link>
    </div>
  )

}

export default Post
