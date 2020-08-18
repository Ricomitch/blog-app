import React from 'react'
// import './Post.css'
import { Link } from 'react-router-dom'

function Post(props) {
  
  
  
  return (
    <>
      <Link className="post" to={`/post/${props._id}`}>
        <img src={props.imgURL}
          className="post-image" />
        <div className="post-title">{props.title}</div>
        <div className="author">placeholder author name</div>
        <div className="summary-text"></div>
      </Link>

    </>
  )
}

export default Post
