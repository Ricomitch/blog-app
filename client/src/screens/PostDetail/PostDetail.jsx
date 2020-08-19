import React, { useState, useEffect } from 'react'
import { getPost, deletePost } from '../../services/posts'
import { useParams, Link, useHistory } from 'react-router-dom'
import './PostDetail.css'

const PostDetail = (props) => {
  const [post, setPost] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  const history = useHistory()

  useEffect(() => {
    async function fetchPost() {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost()
  }, [id])


  if (!isLoaded) {
    return <h1>Please wait</h1>
  }

  return (
    <div>
      <div className='post-detail'>
        <img className='post-detail-image' src={post.imgURL} alt={post.title} />
        <div className='detail'>
          <div className='title'>{post.title}</div>
          <div className='content'>{post.content}</div>
          <div className='button-container'>
            <button className='edit-button'>
              <Link className='edit-link' to={`/posts/${post._id}/edit`}>Edit</Link>
            </button>
            <button className='delete-button' onClick={() => {
              deletePost(post._id);
              history.push('/posts')
            }} >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default PostDetail