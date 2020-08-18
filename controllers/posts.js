const Post = require('../models/Post')
const User = require('../models/User')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const errorHandler500 = (error) => {
  res.status(500).json({ error: error.message })
}

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    errorHandler500(error)
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('posts')
    res.json(users)
  } catch (error) {
    errorHandler500(error)
  }
}

const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.json(post)
    }
    res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
    errorHandler500(error)
  }
}

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    errorHandler500(error)
  }
}

const updatePost = async (req, res) => {
  const { id } = req.params
  await Post.findByIdAndUpdate(id, req.body, { new: true }, (error, post) => {
    if (error) {
      return errorHandler500(error)
    }
    if (!post) {
      return res.status(404).json({ message: 'Product not found!' })
    }
    res.status(200).json(post)
  })
}

deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Post deleted!")
    }
    throw new Error("Post not found!")
  } catch (error) {
    errorHandler500(error)
  }
}



module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getUsers,
  getPostsByUserId
}