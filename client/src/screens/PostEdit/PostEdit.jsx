import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPost, updatePost } from '../../services/posts';
import './PostEdit.css'

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    userId: '',
  });

  const [isUpdated, setUpdated] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      const post = await getPost(id);
      setPost(post);
    }
    fetchPost();
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPost({
      ...post,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { id } = props.match.params;
    const updated = await updatePost(id, post);
    setUpdated(updated);
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <div>
      <div className='post-edit'>
        <div className='image-container'>
          <img className='edit-post-image' src={post.imgURL} alt={post.title} />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={post.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-title'
            placeholder='Title'
            value={post.title}
            name='title'
            required
            autofocus
            onChange={handleChange}
          />
          <textarea
            className='textarea-content'
            rows={10}
            cols={78}
            placeholder='Content'
            value={post.content}
            name='content'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default PostEdit;
