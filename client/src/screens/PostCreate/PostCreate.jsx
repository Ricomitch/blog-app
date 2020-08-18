import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import { createPost } from '../../services/posts';

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    userId: '',
  });

  const [isCreated, setCreated] = useState(false);

  return <input placeholder='Title' name='title' />;
};

export default PostCreate;
