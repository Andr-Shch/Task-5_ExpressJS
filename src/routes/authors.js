const express = require('express')
const router = express.Router()


const {getAuthors,
      removeAuthor,
      getOneAuthor, 
      getPosts,
      getOnePost,
      renameAuthor,
      addAuthor,
      checkAuthorId,
      checkNewAuthor} = require('../controller/router-controler')


//router.use('/',checkNewAuthor)
router.param('id',checkAuthorId)

router.route('/').get(getAuthors).post(checkNewAuthor,addAuthor)

router.route('/:id').get(getOneAuthor).delete(removeAuthor).put(renameAuthor)

router.route('/:id/posts').get(getPosts) 

router.route('/:id/posts/:postID').get(getOnePost)
 
  module.exports = router