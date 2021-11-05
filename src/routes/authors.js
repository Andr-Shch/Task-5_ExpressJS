const express = require('express')
const router = express.Router()
const {mid } = require('../middleware/mid')

const {getAuthors,
      removeAuthor,
      getOneAuthor, 
      getPosts,
      getOnePost,
      renameAuthor,
      addAuthor} = require('../controller/router-controler')

//router.param(mid)

router.route('/').get(getAuthors).post(addAuthor)

router.route('/:id').get(getOneAuthor).delete(removeAuthor).put(renameAuthor)

router.route('/:id/posts').get(getPosts) 

router.route('/:id/posts/:postID').get(getOnePost)
 
  module.exports = router