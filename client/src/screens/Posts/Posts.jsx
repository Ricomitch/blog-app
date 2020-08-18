import React, { useState, useEffect } from 'react'

import Post from '../../components/Post/Post'
//import Layout ?
//import getProducts service

function Posts() {
  const [allPosts, setAllPosts] = useState([])
  
  const postsJSX = allPosts.map((post, index) => {
   return <Post _id={post._id} title={post.title} key={index} />
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
