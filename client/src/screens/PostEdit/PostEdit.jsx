import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getPost, updatePost } from '../../services/posts'

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: '',
    imgURL: '',
    content: '',
    userId: ''
  })

  const [isUpdated, setUpdated] = useState(false)
  const { id } = useParams()
  
  useEffect(() => {
    async function fetchPost() {
      const post = await getPost(id)
      setPost(post)
    }
    fetchPost()
  }, [id])

  function handleChange (event) {
    const { name, value } = event.target
    setPost({
      ...post,
      [name]: value
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const { id } = props.match.params
    const updated = await updatePost(id, post)
    setUpdated(updated)
  }

  // if (isUpdated) {
  //   return <Redirect to={`/posts/${props.match.params.id}`} />
  // }

  return (
    <div>
      <input value={post.title} />
    </div>
  )


}