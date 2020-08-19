import React, { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import { getPosts } from '../../services/posts'
import './Posts.css'

function Posts() {
  const [allPosts, setAllPosts] = useState([])
  
  useEffect(() => {
    
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    let posts = await getPosts()
    // posts = posts.map(post => {
    //   console.log('line 17',post.userId)
    //   //return post.title = capitalized(post.title)
    //   return post.title
    // })
    setAllPosts(posts)

  }
  
  const capitalized = (input) => {
    let splitWords = input.split(' ')
    console.log(splitWords)
    const result = splitWords.map(word => `${word.charAt(0).toUpperCase()}${word.substring(1)}`)
    return result.join(' ')
  }
  

  
  return (
    <div className="posts-container">
      {/* <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} /> */}
      <div className="posts">
        {allPosts.map((post, index) => {
          console.log('line 36',allPosts)
          console.log('line 37',post)
          return <Post _id={post._id} title={post.title} imgURL={post.imgURL} textSample={post.content} authorName={post.userId.username} key={index} />
        })}
      </div> 
    </div>
  )         
}

export default Posts
