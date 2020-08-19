import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

function Post(props) {
  return (
<<<<<<< HEAD
    <Link className='post' to={`/posts/${props._id}`}>
      <div className='img-title-container'>
        <img src={props.imgURL} className='post-image' />
        <div className='post-title'>{props.title}</div>
      </div>
      <div className='author'>{props.authorName}</div>
      <div className='summary-text'>{`${props.textSample.substring(0, 100)}${
        props.textSample.substring(98, 100).includes('.') ? '' : '...'
      }`}</div>
    </Link>
  );
=======
  
      <Link className="post" to={`/posts/${props._id}`}>
        <div className="img-title-container">
          <img src={props.imgURL}
          className="post-image" />
          <div className="post-title">{props.title}</div>
        </div>
        <div className="author">{props.authorName}</div>
        <div className="summary-text">{`${props.textSample.substring(0, 100)}${props.textSample.substring(98, 100).includes('.') ? '' : '...'}`}</div>
      </Link>
  )
  
>>>>>>> 345320afb27003af1927b4cef99b01ab67fc89c8
}

export default Post;
