import React, { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import { getPosts } from '../../services/posts'
import './Posts.css'

function Posts() {
  const [allPosts, setAllPosts] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      posts.forEach(post => {
        post.title = capitalized(post.title)
      })
      setAllPosts(posts)
    }
    fetchPosts()
  }, [])
  
  const capitalized = (input) => {
    let splitWords = input.split(' ')
    console.log(splitWords)
    const result = splitWords.map(word => `${word[0].toUpperCase()}${word.substring(1)}`)
    
    return result.join(' ')
  }
  
  const postsJSX = allPosts.map((post, index) => {
    return <Post _id={post._id} title={post.title} imgURL={post.imgURL} textSample={post.content} key={index} />
  })
  
  return (
    <div className="posts-container">
      {/* <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} /> */}
      <div className="posts">
        {postsJSX}
      </div> 
    </div>
  )         
}

export default Posts
