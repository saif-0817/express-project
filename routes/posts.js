const express = require('express');
const controllers = require('../controller/postController')
const router = express.Router();




router.get('/', controllers.getPosts)

router.get('/:id', controllers.getPost)

router.post('/', controllers.createPost)

router.put('/:id',
    controllers.updatePost

)

router.delete('/:id', controllers.deletePost)

module.exports = router;