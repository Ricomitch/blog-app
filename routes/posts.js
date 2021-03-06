const { Router } = require('express')
const controllers = require('../controllers/posts')

const router = Router()

router.get('/posts', controllers.getPosts)
// router.get('/users/:id/posts', controllers.getPostsByUserId)
router.get('/posts/:id', controllers.getPost)
router.post('/posts', controllers.createPost)
router.put('/posts/:id', controllers.updatePost)
router.delete('/posts/:id', controllers.deletePost)

router.get('/users', controllers.getUsers)


module.exports = router