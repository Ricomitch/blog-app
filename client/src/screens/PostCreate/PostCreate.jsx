import React, { useState } from 'react'
import './PostCreate.css'
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

  function handleChange(event) {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const created = await createPost(post)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }

  return (
    <form className='create-form' onSubmit={(e)=>handleSubmit(e)}>
      <input
        className='input-title'
        placeholder='Title'
        value={post.title}
        name='title'
        required
        autoFocus
        onChange={handleChange}
      />
      <input
        className='input-imgURL'
        placeholder='Image URL'
        value={post.imgURL}
        name='imgURL'
        required
        onChange={handleChange}
      />
      <textarea
        className='textarea-content'
        rows={10}
        placeholder='Content'
        value={post.content}
        name='content'
        required
        onChange={handleChange}
      />
      <input
        className='input-userId'
        placeholder='User ID'
        value={post.userId}
        name='userId'
        required
        onChange={handleChange}
      />
      <button type='submit' className='submit-button'>Submit</button>
    </form>
  )
};

export default PostCreate;
