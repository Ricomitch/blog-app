import React, { useState, useEffect } from 'react'
import Post from '../../components/Post/Post'
import { getPosts,  } from '../../services/posts'
import './Posts.css'

function Posts() {
  const [allPosts, setAllPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])


  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setFilteredPosts(posts)
    }
    fetchPosts()
  }, [])

  const capitalized = (input) => {
    let splitWords = input.split(' ')
    const result = splitWords.map(word => `${word.charAt(0).toUpperCase()}${word.substring(1)}`)
    return result.join(' ')
  }

  const handleFilter = (event) => {
    const filter = event.target.innerText
    console.log(allPosts[0].userId.username)
    setFilteredPosts(allPosts.filter(post => post.userId.username === filter))

  }

  const postsJSX = filteredPosts.map((post, index) => {
    return (
      <Post
        _id={post._id}
        title={capitalized(post.title)}
        imgURL={post.imgURL}
        textSample={post.content}
        authorName={post.userId.username}
        key={index}
        authorName={post.userId.username}
        handleFilter={handleFilter}
      />
    )
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
