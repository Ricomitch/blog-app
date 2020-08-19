import React, { useState, useEffect } from 'react'
import './PostCreate.css'
import { Redirect } from 'react-router-dom';
import { createPost, getUsers  } from '../../services/posts';

const PostCreate = (props) => {

  useEffect(() => {
    fetchUsers()
  }, [])
    
  const [users, updateUsers] = useState([])

  const fetchUsers = async () => {
    const users = await getUsers()
    updateUsers(users)
  }

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
    console.log(created)
    setCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/posts`} />
  }

  return (
    <form className='create-form' onSubmit={(e) => post.userId==='' ? alert('Please select an author') : handleSubmit(e)}>
      <input
        className='input-title'
        placeholder='Title'
        value={post.title}
        name='title'
        required
        autoFocus
        maxLength='27'
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
      <select name='userId' onChange={handleChange}>
        <option name='mustSelect' value=''>Select Author</option>
        {users.map(user => <option  value={user._id}>{user.username}</option>)}
      </select>
      <button type='submit' className='submit-button'>Submit</button>
    </form>
  )
};

export default PostCreate;
