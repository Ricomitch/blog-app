import React, { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import { getPosts } from '../../services/posts'

function Posts() {
  const [allPosts, setAllPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
    }
    fetchPosts()
  }, [])
  
  const postsJSX = allPosts.map((post, index) => {
   return <Post _id={post._id} title={post.title} imgURL={post.imgURL} key={index} />
  })
  
  
  return (
    <>
      {/* <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} /> */}
      <div className="posts">
        {postsJSX}
      </div>
      
    </>
  )         
}

export default Posts
