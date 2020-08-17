const { Router } = require('express')
const controllers = require('../controllers/posts')

const router = Router()

router.get('products', controllers.getPosts)
router.get('/products/:id', controllers.getPost)
router.post('/products', controllers.createPost)
router.put('/products/:id', controllers.updatePost)
router.delete('/products/:id', controllers.deletePost)

module.exports = router